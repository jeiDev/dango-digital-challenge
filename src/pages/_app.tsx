import '@styles/app.css'
import { NextPage } from 'next'
import { store } from "@redux/store"
import { Provider } from "react-redux"
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
  return (
    <Provider store={store}>
      {getLayout(
        <props.Component {...props.pageProps} />
      )}
    </Provider>
  )

}