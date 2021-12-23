import { store } from './store'
export * from './css'
export * from './isAtomicArgsValid'
export * from './createStyle'
export * from './keyframes'
export * from './injectGlobalStyle'
export * from './atom'
export * from './store'
export * from './sheet'
export * from './typings'
export { Parser } from './parser'

import { injectGlobalStyle } from './injectGlobalStyle'

injectGlobalStyle({
  '*, ::before, ::after': {
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#d4d4d4',
    boxSizing: 'border-box',
  },
})

const { setConfig, getConfig, setTheme, getTheme, setMode, getMode, addAtom, composeAtom } = store

export { setConfig, getConfig, setTheme, getTheme, setMode, getMode, addAtom, composeAtom }
