import React, { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  size: number
  baseAlpha: number
  twinklePhase: number
  twinkleSpeed: number
}

type Layer = {
  stars: Star[]
  velocityX: number // px per second
  velocityY: number // px per second
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

const createStars = (
  count: number,
  width: number,
  height: number,
  sizeRange: [number, number]
): Star[] => {
  const [minSize, maxSize] = sizeRange
  const stars: Star[] = []
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: minSize + Math.random() * (maxSize - minSize),
      baseAlpha: 0.4 + Math.random() * 0.6,
      twinklePhase: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.5 + Math.random() * 1.0,
    })
  }
  return stars
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const layersRef = useRef<Layer[]>([])
  const dprRef = useRef<number>(1)
  const sizeRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 })
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

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

      // Recreate stars on resize for consistent density
      const area = width * height
      const base = clamp(Math.round(area / 20000), 40, 160) // base layer reference count

      layersRef.current = [
        {
          stars: createStars(base, width, height, [1.0, 1.8]),
          velocityX: 12,
          velocityY: 0,
        },
        {
          stars: createStars(Math.round(base * 0.7), width, height, [0.8, 1.4]),
          velocityX: -8,
          velocityY: 5,
        },
        {
          stars: createStars(Math.round(base * 0.5), width, height, [0.6, 1.0]),
          velocityX: 5,
          velocityY: -10,
        },
      ]
    }

    setCanvasSize()
    const resizeObserver = new ResizeObserver(() => {
      setCanvasSize()
      // Re-render once on resize to ensure visibility in reduced motion
      renderOnce()
    })
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement)

    let lastTime = performance.now()

    const renderOnce = () => {
      const { width, height } = sizeRef.current
      if (width === 0 || height === 0) return
      ctx.clearRect(0, 0, width, height)
      for (const layer of layersRef.current) {
        const { stars } = layer
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i]
          const alpha = clamp(s.baseAlpha * (0.85 + 0.15 * Math.sin(s.twinklePhase)), 0.2, 1)
          ctx.fillStyle = `rgba(255,255,255,${alpha})`
          ctx.fillRect(s.x, s.y, s.size, s.size)
        }
      }
    }

    const draw = () => {
      const { width, height } = sizeRef.current
      if (width === 0 || height === 0) return

      const now = performance.now()
      const deltaSec = clamp((now - lastTime) / 1000, 0, 0.033) // cap delta at ~33ms
      lastTime = now

      // Clear with a subtle transparent pass to get slight trailing (very faint)
      ctx.clearRect(0, 0, width, height)

      // Render each layer
      for (const layer of layersRef.current) {
        const { stars, velocityX, velocityY } = layer
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i]
          // Update position
          s.x += velocityX * deltaSec
          s.y += velocityY * deltaSec

          // Wrap around edges
          if (s.x < -2) s.x = width + 2
          else if (s.x > width + 2) s.x = -2
          if (s.y < -2) s.y = height + 2
          else if (s.y > height + 2) s.y = -2

          // Twinkle
          s.twinklePhase += s.twinkleSpeed * deltaSec
          const alpha = clamp(s.baseAlpha * (0.85 + 0.15 * Math.sin(s.twinklePhase)), 0.2, 1)

          // Draw as small rect for performance
          ctx.fillStyle = `rgba(255,255,255,${alpha})`
          ctx.fillRect(s.x, s.y, s.size, s.size)
        }
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    // Always render at least one static frame so it's visible
    renderOnce()

    if (!reducedMotion) {
      animationRef.current = requestAnimationFrame(draw)
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      resizeObserver.disconnect()
    }
  }, [reducedMotion])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 hidden dark:block pointer-events-none"
    />
  )
}

export default Starfield


