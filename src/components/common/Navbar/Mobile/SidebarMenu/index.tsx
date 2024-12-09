'use client'

import { useState } from 'react'

import { HamburgerButton } from '@/components/common/HamburgerButton'

export const SidebarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <HamburgerButton
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      variant="primary"
    />
  )
}
