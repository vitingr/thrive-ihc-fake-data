import Image from 'next/image'

import { Anchor } from '@/components/toolkit/Anchor'

import { NavbarProps } from '../types'
import { SidebarMenu } from './SidebarMenu'
import { CreatePost } from './SidebarMenu/icons/CreatePost'
import { Explore } from './SidebarMenu/icons/Explore'
import { Home } from './SidebarMenu/icons/Home'

export const MobileNavbar: React.FC<NavbarProps> = async () => {
  return (
    <>
      <nav className="relative mx-2 flex border-b border-slate-200 py-1 lg:hidden">
        <section className="flex w-full items-center justify-between gap-4">
          <Anchor
            className="flex max-w-12 items-center gap-1"
            href="#"
            variant="custom"
          >
            <Image alt="Logo" height={64} src="/logos/logo.png" width={64} />
            <span className="text-lg font-semibold text-indigo-600">
              Thrive
            </span>
          </Anchor>
          <SidebarMenu />
        </section>
      </nav>
      <nav className="sticky top-[91.5%] z-[99999999] flex min-h-[300px] w-full flex-col items-start bg-white px-6 py-4 shadow lg:hidden">
        <section className="flex w-full items-center justify-between gap-4">
          <Home className="h-6.5 w-6.5 text-slate-600" />
          <Explore className="h-6.5 w-6.5 text-slate-600" />
          <CreatePost className="h-6.5 w-6.5 text-slate-600" />{' '}
          <figure className="w-auto lg:min-w-8">
            <Image
              alt="User Profile Image"
              className="h-8 w-8 cursor-pointer rounded-full object-cover transition-all duration-300 hover:brightness-125"
              height={80}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRzuPwkEQxYXmGDVeZl6XsH0_x6Tgs4ZipooLGfFSfnBLRbs70GKZ36GCplQ9yWz0d8k&usqp=CAU"
              width={80}
            />
          </figure>
        </section>
      </nav>
    </>
  )
}
