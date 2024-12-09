import { NextPage } from 'next'
import { setRequestLocale } from 'next-intl/server'

import { NextPageDefaultProps } from '@/types/nextPageDefaultProps'
import { getMetaData } from '@/utils/getters/getMetaData'
import { translation } from '@/utils/internationalization/translation'

import { AuthForm } from './components/AuthForm'
import { LogginWithAccount } from './components/LogginWithAccount'

export async function generateMetadata() {
  return getMetaData({
    title: 'Thrive',
    description:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    opengraph: ''
  })
}

const Page: NextPage<NextPageDefaultProps> = async ({ params: { locale } }) => {
  setRequestLocale(locale)
  const { raw } = await translation('auth')

  return (
    <main className="flex h-screen w-screen py-8 px-4 lg:px-0 lg:py-0 flex-col items-center sm:justify-center gap-4 bg-slate-100">
      <AuthForm copy={raw('form')} locale={locale} />
      <LogginWithAccount copy={raw('form')} />
    </main>
  )
}

export default Page
