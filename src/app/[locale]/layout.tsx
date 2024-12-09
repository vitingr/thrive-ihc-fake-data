import { NextPage } from 'next'
import { notFound } from 'next/navigation'
import { PropsWithChildren } from 'react'

import ToastMessage from '@/components/toolkit/ToastMessage'
import { locales } from '@/constants/internationalization'
import { Locale } from '@/constants/internationalization/types'

import '@/styles/index.scss'

interface RootLayoutProps extends PropsWithChildren {
  params: { locale: Locale }
}

export const generateStaticParams = () => {
  return locales?.map(locale => ({ locale }))
}

const RootLayout: NextPage<RootLayoutProps> = async ({
  children,
  params: { locale }
}) => {
  if (!locales.includes(locale)) notFound()

  return (
    <html lang={locale}>
      <body className="bg-neutral-100 selection:bg-blue-100">
        <ToastMessage />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
