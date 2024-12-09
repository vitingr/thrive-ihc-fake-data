import { getLocale } from 'next-intl/server'
import Image from 'next/image'

import { Button } from '@/components/toolkit/Button'
import { Container } from '@/components/toolkit/Container'
import { translation } from '@/utils/internationalization/translation'

import { EditProfile } from '../EditProfile'
import { Navigation } from './Navigation'
import { UserHighlights } from './UserHighlights'

export const HeroProfile: React.FC = async () => {
  const locale = await getLocale()
  const { raw } = await translation('profile')

  return (
    <Container
      as="section"
      className="flex flex-col gap-4 rounded-[6px] bg-white lg:px-6 pt-4 lg:pt-8 lg:gap-8"
      data-cid="hero-profile"
    >
      <header className="flex w-full lg:flex-row flex-col lg:justify-between gap-4 ">
        <figure className="w-auto min-w-12 min-h-12 lg:min-h-20 lg:min-w-20">
          <Image
            alt="User Profile Image"
            className="cursor-pointer rounded-full object-cover transition-all duration-300 hover:brightness-125 h-12 lg:h-20 w-12 lg:w-20"
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
          <p className="text-xs lg:text-sm text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
            culpa accusantium. Alias commodi voluptates et nobis, fuga enim
            sapiente asperiores, quisquam sunt odio est ad! Praesentium
            asperiores aspernatur modi dicta.
          </p>
        </article>
        <article className="my-3 lg:my-0 flex h-auto w-auto items-start gap-4 lg:min-w-[220px]">
          <EditProfile copy={raw('editProfile')} locale={locale} />
          <Button className="text-xs md:text-sm" variant="secondaryOutline">
            {raw('viewProfile')}
          </Button>
        </article>
      </header>
      <UserHighlights />
      <Navigation copy={raw('heroProfile')} />
    </Container>
  )
}
