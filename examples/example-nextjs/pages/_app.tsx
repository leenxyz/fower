import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { setConfig } from '@fower/react'

setConfig({
  prefix: 'ai-c-',
  mode: {
    autoDarkMode: {
      enabled: true,
    },
  },
})

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />
}
