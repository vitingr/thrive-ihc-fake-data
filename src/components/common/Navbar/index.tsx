import { DesktopNavbar } from './Desktop'
import { MobileNavbar } from './Mobile'
import { NavbarProps } from './types'

export const Navbar: React.FC<NavbarProps> = async () => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  )
}
