import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { ThemeToogle } from '@/features/theme-toggle/components/theme-toggle'
import { I18nSwitcher } from '@/features/i18n/components/i18n-switcher'
import { useTranslation } from 'react-i18next'

export const Route = createRootRoute({
  component: () => {
    const { t } = useTranslation('common')

    return (
      <>
        <div className='p-2 flex gap-2'>
          <Link to='/' className='[&.active]:font-bold'>
            {t('header.nav-home')}
          </Link>{' '}
          <Link to='/about' className='[&.active]:font-bold'>
            {t('header.nav-about')}
          </Link>
          <ThemeToogle />
          <I18nSwitcher />
        </div>
        <hr />
        <Outlet />
      </>
    )
  },
})
