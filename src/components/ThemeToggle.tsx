import React, { useEffect, useState } from 'react'
import { Sun, Moon } from './icons'

const THEME_KEY = 'theme'
const THEME_EVENT = 'portfolio-themechange'

type Theme = 'dark' | 'light'

/** The <html> class list is the single source of truth (set pre-React by the boot script). */
function currentTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  const html = document.documentElement
  html.classList.toggle('dark', theme === 'dark')
  html.style.colorScheme = theme
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    /* storage unavailable (private mode) — theme still applies for this page */
  }
  // Notify every mounted toggle instance (desktop + mobile) to re-read the DOM
  window.dispatchEvent(new Event(THEME_EVENT))
}

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    const sync = () => setTheme(currentTheme())

    // Another toggle instance changed the theme
    window.addEventListener(THEME_EVENT, sync)

    // Another tab changed the theme
    const onStorage = (e: StorageEvent) => {
      if (e.key === THEME_KEY && (e.newValue === 'dark' || e.newValue === 'light')) {
        document.documentElement.classList.toggle('dark', e.newValue === 'dark')
        document.documentElement.style.colorScheme = e.newValue
        sync()
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      window.removeEventListener(THEME_EVENT, sync)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  return (
    <button
      type="button"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
      onClick={() => applyTheme(currentTheme() === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
