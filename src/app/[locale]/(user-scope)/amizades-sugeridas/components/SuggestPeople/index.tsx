'use client'

import { Container } from '@/components/toolkit/Container'
import { useEffect, useState } from 'react'
import { USERS_DATA } from './data'
import { SuggestUserProps } from './types'
import { SuggestFriendCard } from './SuggestFriendCard'

export const SuggestPeople: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Container
      as="section"
      className="flex flex-col gap-4 rounded-[6px] bg-white px-6 pt-8 lg:gap-8"
      data-cid="suggest-friends"
    >
      <ul className='list-none self-stretch items-stretch h-full lg:grid xl:grid-cols-4 lg:grid-cols-3 w-full gap-4 grid-cols-2'>
        {USERS_DATA.map((user: SuggestUserProps, index: number) => (
          <SuggestFriendCard user={user} key={`${user.name}-${index}`} />
        ))}
      </ul>
    </Container>
  )
}
