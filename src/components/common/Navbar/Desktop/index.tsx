import { translation } from '@/utils/internationalization/translation'

import { NavbarProps } from '../types'
import { UserActions } from '../UserActions'

export const DesktopNavbar: React.FC<NavbarProps> = async () => {
  const { raw } = await translation('navbar')

  return (
    <nav className="bg-neutral sticky top-0 z-30 hidden w-full border-b border-slate-200 bg-neutral-50 px-4 py-3 lg:block">
      <section className="mx-auto flex w-full max-w-2xl items-center justify-between gap-6 lg:max-w-7xl lg:gap-0">
        <UserActions copy={raw('content')} />
      </section>
    </nav>
  )
}
