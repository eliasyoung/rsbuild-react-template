import { create } from 'zustand'
import type { ThemeOptions } from '../@types'
// import { isEnumMember } from '@/lib/utils'
import { isConstObjectValue } from '@/lib/utils'
import { THEME_OPTIONS } from '../constants'

export interface ThemeState {
  theme: ThemeOptions
  setTheme: (theme: ThemeOptions) => void
}

// export const useThemeStore = create<ThemeState>((set) => {
//   const storageTheme = localStorage.getItem('theme_key') as ThemeOptions | null
//   return {
//     theme:
//       storageTheme && isEnumMember(storageTheme, ThemeOptions)
//         ? storageTheme
//         : ThemeOptions.LIGHT,
//     setTheme: (theme) => {
//       set((_state) => ({ theme: theme }))
//     },
//   }
// })

export const useThemeStore = create<ThemeState>((set) => {
  const storageTheme = localStorage.getItem('theme_key') as ThemeOptions | null
  return {
    theme:
      storageTheme &&
      isConstObjectValue(storageTheme, Object.values(THEME_OPTIONS))
        ? storageTheme
        : THEME_OPTIONS.LIGHT,
    setTheme: (theme) => {
      set((_state) => ({ theme: theme }))
    },
  }
})
