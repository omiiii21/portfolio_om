import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

export type IdleContextValue = {
  isIdle: boolean
}

const IdleContext = createContext<IdleContextValue>({ isIdle: false })

type IdleProviderProps = {
  children: React.ReactNode
  idleDelayMs?: number
}

export const IdleProvider: React.FC<IdleProviderProps> = ({ children, idleDelayMs = 1200 }) => {
  const [isIdle, setIsIdle] = useState<boolean>(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const schedule = () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => setIsIdle(true), idleDelayMs)
    }
    const onActive = () => {
      if (isIdle) setIsIdle(false)
      schedule()
    }
    schedule()
    window.addEventListener('pointermove', onActive, { passive: true })
    window.addEventListener('pointerdown', onActive, { passive: true })
    window.addEventListener('wheel', onActive, { passive: true })
    window.addEventListener('keydown', onActive)
    window.addEventListener('touchstart', onActive, { passive: true })
    window.addEventListener('mouseenter', onActive)
    window.addEventListener('mouseleave', schedule)
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      window.removeEventListener('pointermove', onActive as EventListener)
      window.removeEventListener('pointerdown', onActive as EventListener)
      window.removeEventListener('wheel', onActive as EventListener)
      window.removeEventListener('keydown', onActive as EventListener)
      window.removeEventListener('touchstart', onActive as EventListener)
      window.removeEventListener('mouseenter', onActive as EventListener)
      window.removeEventListener('mouseleave', schedule as EventListener)
    }
  }, [idleDelayMs, isIdle])

  return <IdleContext.Provider value={{ isIdle }}>{children}</IdleContext.Provider>
}

export const useIdle = () => useContext(IdleContext)


