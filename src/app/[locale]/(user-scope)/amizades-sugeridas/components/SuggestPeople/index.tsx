'use client'

import { Container } from '@/components/toolkit/Container'
import { useEffect, useState } from 'react'

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
      data-cid="hero-profile"
    >
      
    </Container>
  )
}
