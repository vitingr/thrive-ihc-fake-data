import Image from 'next/image'
import { SuggestFriendCardProps } from './types'
import { Button } from '@/components/toolkit/Button'

export const SuggestFriendCard: React.FC<SuggestFriendCardProps> = ({
  user
}) => {
  return (
    <li className="h-auto w-full max-w-[265px] rounded-md border border-slate-300">
      <figure className="w-full rounded-t-md">
        <Image
          src="/backgrounds/default-profile-background.svg"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </figure>
      <figure className="mx-auto -mt-8 h-full max-h-14 w-full max-w-14">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRzuPwkEQxYXmGDVeZl6XsH0_x6Tgs4ZipooLGfFSfnBLRbs70GKZ36GCplQ9yWz0d8k&usqp=CAU"
          className="h-full max-h-14 w-full max-w-14 rounded-full object-cover"
          alt="Background Image"
          width={80}
          height={80}
        />
      </figure>
      <article className="flex w-full flex-col gap-4 p-3 lg:p-4">
        <div className="flex w-full flex-col items-center h-full xl:min-h-[70px]">
          <p className="text-center text-sm font-semibold">{user.name}</p>
          <p className="text-center text-xs text-slate-500">{user.bio}</p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="text-xs text-slate-400">
            {user.common_followers} amigos em comum
          </p>
          <Button className="min-w-full md:text-sm" variant="primaryOutline" >
            Acompanhar
          </Button>
        </div>
      </article>
    </li>
  )
}
