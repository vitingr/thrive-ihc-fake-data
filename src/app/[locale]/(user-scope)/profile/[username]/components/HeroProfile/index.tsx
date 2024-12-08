import Image from 'next/image'

import { Button } from '@/components/toolkit/Button'
import { Container } from '@/components/toolkit/Container'
import { translation } from '@/utils/internationalization/translation'

import { Navigation } from './Navigation'
import { UserHighlights } from './UserHighlights'
import { EditProfile } from '../EditProfile'
import { getLocale } from 'next-intl/server'

export const HeroProfile: React.FC = async () => {
  const locale = await getLocale()
  const { raw } = await translation('profile')

  return (
    <Container
      as="section"
      className="flex flex-col gap-4 rounded-[6px] bg-white px-6 pt-8 lg:gap-8"
      data-cid="hero-profile"
    >
      <header className="flex w-full justify-between gap-4 ">
        <figure className="w-auto lg:min-w-20">
          <Image
            alt="User Profile Image"
            className="cursor-pointer rounded-full object-cover transition-all duration-300 hover:brightness-125 lg:h-20 lg:w-20"
            height={80}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRzuPwkEQxYXmGDVeZl6XsH0_x6Tgs4ZipooLGfFSfnBLRbs70GKZ36GCplQ9yWz0d8k&usqp=CAU"
            width={80}
          />
        </figure>
        <article className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col">
            <h1 className="font-semibold">Vitor Silva</h1>
            <p className="text-sm">Santa Bárbara d'Oeste, SP</p>
          </div>
          <p className="text-sm text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
            culpa accusantium. Alias commodi voluptates et nobis, fuga enim
            sapiente asperiores, quisquam sunt odio est ad! Praesentium
            asperiores aspernatur modi dicta.
          </p>
        </article>
        <article className="flex h-auto w-auto items-start gap-4 lg:min-w-[220px]">
          <EditProfile locale={locale} copy={raw('editProfile')} />
          <Button className="md:text-sm" variant="secondaryOutline">
            {raw('viewProfile')}
          </Button>
        </article>
      </header>
      <UserHighlights />
      <Navigation copy={raw('heroProfile')} />
    </Container>
  )
}
