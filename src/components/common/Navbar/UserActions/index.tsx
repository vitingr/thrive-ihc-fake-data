import Image from 'next/image'
import { IoApps } from 'react-icons/io5'

import { Anchor } from '@/components/toolkit/Anchor'

import { UserActionsProps } from './types'
import { UserScope } from './UserScope'
import { LogOut } from './UserScope/LogOut'

export const UserActions: React.FC<UserActionsProps> = async ({ copy }) => {
  return (
    <div className="flex w-auto items-center justify-end gap-8 lg:w-full">
      <UserScope />
      <div className="flex items-center gap-6 border-l border-slate-300 pl-8">
        <div className="flex items-center gap-3">
          <Anchor
            className="py-1 md:text-sm"
            href={copy.login.href}
            variant="secondary"
          >
            {copy.login.label}
          </Anchor>
          <Anchor
            className="py-1 md:text-sm"
            href={copy.signup.href}
            variant="secondaryOutline"
          >
            {copy.signup.label}
          </Anchor>
        </div>
        <figure className="cursor-pointer transition-all duration-300 hover:brightness-125">
          <IoApps fill="#475569" size={20} />
        </figure>
      </div>
    </div>
  )
}
