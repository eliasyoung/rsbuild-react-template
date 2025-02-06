import { useTranslation } from 'react-i18next'

import { supportLanguages } from '..'
import { LOCAL_LANG_KEY } from '../constants'

export const I18nSwitcher = () => {
  const { i18n } = useTranslation()

  const setLanguageWithLocale = (
    language: (typeof supportLanguages)[number]['key'],
  ) => {
    i18n.changeLanguage(language)
    localStorage.setItem(LOCAL_LANG_KEY, language)
  }

  return (
    <button
      type='button'
      onClick={() => {
        setLanguageWithLocale(
          i18n.language === supportLanguages[0].key
            ? supportLanguages[1].key
            : supportLanguages[0].key,
        )
      }}
    >
      {i18n.language === supportLanguages[0].key ? 'English' : '中文'}
    </button>
  )
}
