import { useTheme } from '../hooks'
import { ThemeOptions } from '../@types'

export const ThemeToogle = () => {
  const { theme, setTheme } = useTheme()
  const applyThemeChange = (targetTheme: ThemeOptions) => {
    if (targetTheme === theme) return
    localStorage.setItem('theme_key', targetTheme)
    setTheme(targetTheme)
  }

  return (
    <button
      type='button'
      onClick={() => {
        applyThemeChange(
          theme === ThemeOptions.LIGHT ? ThemeOptions.DARK : ThemeOptions.LIGHT,
        )
      }}
    >
      {theme === ThemeOptions.LIGHT ? 'Light' : 'Dark'}
    </button>
  )
}
