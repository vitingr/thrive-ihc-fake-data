import { PropsWithChildren, SetStateAction } from 'react'

import { Post } from '@/types/models/post'
import { User } from '@/types/models/user'

export interface UserProfileContextProps {
  currentSelectedTab: number
  setCurrentSelectedTab: React.Dispatch<SetStateAction<number>>
}

export interface UserProfileProviderProps extends PropsWithChildren {}
