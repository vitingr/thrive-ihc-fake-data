'use client'

import { useEffect, useState } from 'react'

import { Container } from '@/components/toolkit/Container'

import { USERS_DATA } from './data'
import { SuggestFriendCard } from './SuggestFriendCard'
import { SuggestUserProps } from './types'

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
      <ul className="h-full w-full list-none grid-cols-2 items-stretch gap-4 self-stretch lg:grid lg:grid-cols-3 xl:grid-cols-4">
        {USERS_DATA.map((user: SuggestUserProps, index: number) => (
          <SuggestFriendCard key={`${user.name}-${index}`} user={user} />
        ))}
      </ul>
    </Container>
  )
}
