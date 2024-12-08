import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import { User } from '@/types/models/user'

import { credentialsOptions } from './credentialsOptions'
import { googleOptions } from './googleOptions'

export const authOptions: AuthOptions = {
  providers: [
    // @ts-expect-error
    CredentialsProvider(credentialsOptions),
    // @ts-expect-error
    GoogleProvider(googleOptions)
  ],
  callbacks: {
    jwt: async data => {
      const { user, token, trigger, session } = data

      let userData: User = token.userData as User

      if (user) userData = user as unknown as User

      if (trigger === 'update') {
        if (session) {
          userData = {
            ...userData,
            ...session
          }
        }
      }

      token.userData = userData
      return token
    },
    session: async props => {
      const { session, token: jwt } = props

      const { userData } = jwt
      session.user = userData

      return Promise.resolve(session)
    },
    redirect: async ({ url, baseUrl }) => {
      return url
    }
  },
  pages: {
    signIn: '/',
    error: '/'
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 5 * 24 * 60 * 60
  }
}