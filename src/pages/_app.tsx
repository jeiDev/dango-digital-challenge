import '@styles/app.css'
import '@styles/grid.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App(props: AppPropsLayout) {
  const getLayout = props.Component.getLayout || ((page) => page)
  return getLayout(
    <props.Component {...props.pageProps} />
  )
}