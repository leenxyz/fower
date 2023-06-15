import '../styles/globals.css'
import { createStyle, setConfig, setTheme, addAtom, injectGlobalStyle } from '@fower/react'
import type { AppProps } from 'next/app'

setConfig({
  // prefix: 'ai-c-',
  mode: {
    autoDarkMode: {
      enabled: true,
    },
  },
})

setTheme({
  colors: {
    brandLight: '#e0f2fe',
    brandLighter: '#bae6fd',
    brandLightest: '#7dd3fc',
    brandPrimary: '#38bdf8',
    brandDark: '#0ea5e9',
    brandDarker: '#0284c7',
    brandDarkest: '#0369a1',

    foo: '#f90',
  },
  spacings: {
    100: 400,
  },
  breakpoints: {
    '4xl': '',
  },
})

addAtom(/heading(sm|md|lg)/i, (atom) => {
  const size = atom.propKey.replace('heading', '').toLowerCase()
  switch (size) {
    case 'sm':
      atom.style = { fontSize: 16 }
      break
    case 'md':
      atom.style = { fontSize: 24 }
      break
    case 'lg':
      atom.style = { fontSize: 32 }
      break
    default:
      break
  }
  return atom
})

addAtom('textBody', {
  fontSize: 20,
})

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />
}
