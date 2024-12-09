import { UserProfileProvider } from '@/contexts/UserProfileProvider'

import { HeroProfile } from '../HeroProfile'
import { SelectedTabContent } from '../SelectedTabContent'

export const ProfileFeed: React.FC = async () => {
  return (
    <UserProfileProvider>
      <section className="flex w-full flex-col gap-4">
        <HeroProfile />
        <SelectedTabContent />
      </section>
    </UserProfileProvider>
  )
}
