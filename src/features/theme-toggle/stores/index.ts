import { create } from 'zustand'
import { ThemeOptions } from '../@types'
import { isEnumMember } from '@/lib/utils'

export interface ThemeState {
  theme: ThemeOptions
  setTheme: (theme: ThemeOptions) => void
}

export const useThemeStore = create<ThemeState>((set) => {
  const storageTheme = localStorage.getItem('theme_key') as ThemeOptions | null
  return {
    theme:
      storageTheme && isEnumMember(storageTheme, ThemeOptions)
        ? storageTheme
        : ThemeOptions.LIGHT,
    setTheme: (theme) => {
      set((_state) => ({ theme: theme }))
    },
  }
})
