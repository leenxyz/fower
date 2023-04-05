import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { setConfig } from '@fower/core'
import '@fower/react'

setConfig({
  mode: {
    autoDarkMode: {
      enabled: true,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
