import React, { useEffect, useState } from 'react'

const THEME_KEY = 'theme'

function getInitialTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem(THEME_KEY) as 'dark' | 'light' | null
  if (stored === 'dark' || stored === 'light') return stored
  // Default to dark for this site
  return 'dark'
}

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme)

  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const apply = theme === 'dark'
    html.classList.toggle('dark', apply)
    body.classList.toggle('dark', apply)
    html.setAttribute('data-theme', theme)
    html.style.colorScheme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="text-xs px-1 py-1 rounded-md border border-white/10 hover:bg-white/5 transition"
      onClick={() => {
        const next = theme === 'dark' ? 'light' : 'dark'
        const html = document.documentElement
        const body = document.body
        const apply = next === 'dark'
        html.classList.toggle('dark', apply)
        body.classList.toggle('dark', apply)
        html.setAttribute('data-theme', next)
        html.style.colorScheme = next
        localStorage.setItem(THEME_KEY, next)
        setTheme(next)
      }}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle


