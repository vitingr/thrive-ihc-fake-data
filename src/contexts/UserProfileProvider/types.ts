import { PropsWithChildren, SetStateAction } from 'react'

export interface UserProfileContextProps {
  currentSelectedTab: number
  setCurrentSelectedTab: React.Dispatch<SetStateAction<number>>
}

export interface UserProfileProviderProps extends PropsWithChildren {}
