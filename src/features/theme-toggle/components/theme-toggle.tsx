import { useTheme } from '../hooks'
import type { ThemeOptions } from '../@types'
import { THEME_OPTIONS } from '../constants'

export const ThemeToogle = () => {
  const { theme, setTheme } = useTheme()
  const applyThemeChange = (targetTheme: ThemeOptions) => {
    if (targetTheme === theme) return
    localStorage.setItem('theme_key', targetTheme)
    setTheme(targetTheme)
  }

  // return (
  //   <button
  //     type='button'
  //     onClick={() => {
  //       applyThemeChange(
  //         theme === ThemeOptions.LIGHT ? ThemeOptions.DARK : ThemeOptions.LIGHT,
  //       )
  //     }}
  //   >
  //     {theme === ThemeOptions.LIGHT ? 'Light' : 'Dark'}
  //   </button>
  // )
  return (
    <button
      type='button'
      onClick={() => {
        applyThemeChange(
          theme === THEME_OPTIONS.LIGHT
            ? THEME_OPTIONS.DARK
            : THEME_OPTIONS.LIGHT,
        )
      }}
    >
      {theme === THEME_OPTIONS.LIGHT ? 'Light' : 'Dark'}
    </button>
  )
}
