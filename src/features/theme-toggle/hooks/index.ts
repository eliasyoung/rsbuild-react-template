import { useThemeStore } from '../stores'
import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
// import { ThemeOptions } from '../@types'
import { THEME_OPTIONS } from '../constants'

export const useTheme = () => {
  const { theme, setTheme } = useThemeStore(
    useShallow((state) => ({ theme: state.theme, setTheme: state.setTheme })),
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove(...Object.values(THEME_OPTIONS))
    root.removeAttribute('data-theme')

    // if (theme === ThemeOptions.SYSTEM) {
    if (theme === THEME_OPTIONS.SYSTEM) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? THEME_OPTIONS.DARK
        : THEME_OPTIONS.LIGHT
      // ? 'dark'
      // : 'light'

      root.classList.add(systemTheme)
      root.setAttribute('data-theme', systemTheme)
      return
    }

    root.classList.add(theme)
    root.setAttribute('data-theme', theme)
  }, [theme])

  return { theme, setTheme }
}
