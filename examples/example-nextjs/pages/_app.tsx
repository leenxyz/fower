import '../styles/globals.css'
import { setConfig } from '@fower/core'
import '@fower/react'

setConfig({
  mode: {
    autoDarkMode: {
      enabled: true,
    },
  },
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
