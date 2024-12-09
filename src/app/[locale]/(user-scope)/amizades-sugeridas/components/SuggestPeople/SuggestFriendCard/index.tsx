import Image from 'next/image'

import { Button } from '@/components/toolkit/Button'

import { SuggestFriendCardProps } from './types'

export const SuggestFriendCard: React.FC<SuggestFriendCardProps> = ({
  user
}) => {
  return (
    <li className="h-auto w-full max-w-[265px] rounded-md border border-slate-300">
      <figure className="w-full rounded-t-md">
        <Image
          alt="Background Image"
          height={1080}
          src="/backgrounds/default-profile-background.svg"
          width={1920}
        />
      </figure>
      <figure className="mx-auto -mt-8 h-full max-h-14 w-full max-w-14">
        <Image
          alt="Background Image"
          className="h-full max-h-14 w-full max-w-14 rounded-full object-cover"
          height={80}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRzuPwkEQxYXmGDVeZl6XsH0_x6Tgs4ZipooLGfFSfnBLRbs70GKZ36GCplQ9yWz0d8k&usqp=CAU"
          width={80}
        />
      </figure>
      <article className="flex w-full flex-col gap-4 p-3 lg:p-4">
        <div className="flex h-full w-full flex-col items-center xl:min-h-[70px]">
          <p className="text-center text-sm font-semibold">{user.name}</p>
          <p className="text-center text-xs text-slate-500">{user.bio}</p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="text-xs text-slate-400">
            {user.common_followers} amigos em comum
          </p>
          <Button className="min-w-full md:text-sm" variant="primaryOutline">
            Acompanhar
          </Button>
        </div>
      </article>
    </li>
  )
}
