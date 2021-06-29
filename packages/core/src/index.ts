import { store } from '@fower/store'
export * from './css'
export * from './createStyle'
export * from './keyframes'
export * from './injectGlobalStyle'

import { injectGlobalStyle } from './injectGlobalStyle'

injectGlobalStyle({
  '*, ::before, ::after': {
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#d4d4d4',
    boxSizing: 'border-box',
  },
})

const { setConfig, getConfig, setTheme, getTheme, addAtom, composeAtom } = store

export { setConfig, getConfig, setTheme, getTheme, addAtom, composeAtom }
