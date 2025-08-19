import React, { useEffect, useRef, useState } from 'react'
import { useIdle } from '../context/IdleContext'

type Layer = {
  pattern: CanvasPattern
  tileSize: number
  velocityX: number
  velocityY: number
  offsetX: number
  offsetY: number
}

type DotGridProps = {
  idleDelayMs?: number
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

const createDotTile = (
  tileSize: number,
  dotRadius: number,
  color: string,
  dpr: number
): { pattern: CanvasPattern; tileSize: number } => {
  const tileCanvas = document.createElement('canvas')
  // Create tile in CSS px size
  tileCanvas.width = Math.max(1, Math.floor(tileSize * dpr))
  tileCanvas.height = Math.max(1, Math.floor(tileSize * dpr))
  const tctx = tileCanvas.getContext('2d')!
  // Draw dot at center with DPR-aware size
  tctx.fillStyle = color
  tctx.beginPath()
  tctx.arc((tileSize * dpr) / 2, (tileSize * dpr) / 2, dotRadius * dpr, 0, Math.PI * 2)
  tctx.fill()

  const pattern = tctx.createPattern(tileCanvas, 'repeat')!
  return { pattern, tileSize }
}

const DotGrid: React.FC<DotGridProps> = ({ idleDelayMs = 3200 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const layersRef = useRef<Layer[]>([])
  const sizeRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 })
  const dprRef = useRef<number>(1)
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const idleTimeoutRef = useRef<number | null>(null)
  const [isIdle, setIsIdle] = useState<boolean>(false)
  const { isIdle: isIdleFromContext } = useIdle()

  // Idle detection
  useEffect(() => {
    const scheduleIdle = () => {
      if (idleTimeoutRef.current) window.clearTimeout(idleTimeoutRef.current)
      idleTimeoutRef.current = window.setTimeout(() => setIsIdle(true), idleDelayMs)
    }
    const markActive = () => {
      if (isIdle) setIsIdle(false)
      scheduleIdle()
    }
    scheduleIdle()
    window.addEventListener('pointermove', markActive, { passive: true })
    window.addEventListener('pointerdown', markActive, { passive: true })
    window.addEventListener('wheel', markActive, { passive: true })
    window.addEventListener('keydown', markActive)
    window.addEventListener('touchstart', markActive, { passive: true })
    window.addEventListener('mouseenter', markActive)
    window.addEventListener('mouseleave', scheduleIdle)
    return () => {
      if (idleTimeoutRef.current) window.clearTimeout(idleTimeoutRef.current)
      window.removeEventListener('pointermove', markActive as EventListener)
      window.removeEventListener('pointerdown', markActive as EventListener)
      window.removeEventListener('wheel', markActive as EventListener)
      window.removeEventListener('keydown', markActive as EventListener)
      window.removeEventListener('touchstart', markActive as EventListener)
      window.removeEventListener('mouseenter', markActive as EventListener)
      window.removeEventListener('mouseleave', scheduleIdle as EventListener)
    }
  }, [idleDelayMs, isIdle])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const width = parent.clientWidth
      const height = parent.clientHeight
      const dpr = clamp(window.devicePixelRatio || 1, 1, 2)
      dprRef.current = dpr
      sizeRef.current = { width, height }

      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'

      ctx.reset?.()
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Layers: subtle dots with different spacing and motion
      const { pattern: p1, tileSize: t1 } = createDotTile(28, 1.1, 'rgba(0, 0, 0, 0.22)', dpr)
      const { pattern: p2, tileSize: t2 } = createDotTile(40, 1.3, 'rgba(0, 0, 0, 0.15)', dpr)
      const { pattern: p3, tileSize: t3 } = createDotTile(56, 1.5, 'rgba(0, 0, 0, 0.29)', dpr)

      layersRef.current = [
        { pattern: p1, tileSize: t1, velocityX: 8, velocityY: 0, offsetX: 0, offsetY: 0 },
        { pattern: p2, tileSize: t2, velocityX: -5, velocityY: 3, offsetX: 0, offsetY: 0 },
        { pattern: p3, tileSize: t3, velocityX: 3, velocityY: -6, offsetX: 0, offsetY: 0 },
      ]
    }

    setCanvasSize()
    const resizeObserver = new ResizeObserver(() => {
      setCanvasSize()
      renderOnce()
    })
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement)

    let lastTime = performance.now()

    const applyPatternTransform = (pattern: CanvasPattern, dpr: number, tx: number, ty: number) => {
      if ('setTransform' in pattern && typeof (pattern as any).setTransform === 'function') {
        const m = new DOMMatrix()
          .scale(1 / dpr, 1 / dpr)
          .translate(tx, ty)
        ;(pattern as any).setTransform(m)
      }
    }

    const renderOnce = () => {
      const { width, height } = sizeRef.current
      if (width === 0 || height === 0) return
      ctx.clearRect(0, 0, width, height)
      for (const layer of layersRef.current) {
        applyPatternTransform(layer.pattern, dprRef.current, layer.offsetX, layer.offsetY)
        ctx.fillStyle = layer.pattern
        ctx.fillRect(0, 0, width, height)
      }
    }

    const draw = () => {
      const { width, height } = sizeRef.current
      if (width === 0 || height === 0) return
      const now = performance.now()
      const deltaSec = clamp((now - lastTime) / 1000, 0, 0.033)
      lastTime = now

      // Update offsets
      for (const layer of layersRef.current) {
        layer.offsetX += layer.velocityX * deltaSec
        layer.offsetY += layer.velocityY * deltaSec
        // Keep offsets bounded to prevent large numbers
        if (layer.offsetX > layer.tileSize) layer.offsetX -= layer.tileSize
        if (layer.offsetX < -layer.tileSize) layer.offsetX += layer.tileSize
        if (layer.offsetY > layer.tileSize) layer.offsetY -= layer.tileSize
        if (layer.offsetY < -layer.tileSize) layer.offsetY += layer.tileSize
      }

      ctx.clearRect(0, 0, width, height)
      for (const layer of layersRef.current) {
        applyPatternTransform(layer.pattern, dprRef.current, layer.offsetX, layer.offsetY)
        ctx.fillStyle = layer.pattern
        ctx.fillRect(0, 0, width, height)
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    // Always draw a static frame
    renderOnce()
    const activeIdle = typeof isIdleFromContext === 'boolean' ? isIdleFromContext : isIdle
    if (!reducedMotion && activeIdle) {
      animationRef.current = requestAnimationFrame(draw)
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      resizeObserver.disconnect()
    }
  }, [reducedMotion, isIdle, isIdleFromContext])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 z-0 block dark:hidden pointer-events-none transition-opacity duration-500 ${(typeof isIdleFromContext === 'boolean' ? isIdleFromContext : isIdle) ? 'opacity-100' : 'opacity-0'}`}
    />
  )
}

export default DotGrid


