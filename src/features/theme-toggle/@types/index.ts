// export enum ThemeOptions {
//   LIGHT = 'light',
//   DARK = 'dark',
//   SYSTEM = 'system',
// }

import type { THEME_OPTIONS } from '../constants'

export type ThemeOptions = (typeof THEME_OPTIONS)[keyof typeof THEME_OPTIONS]
