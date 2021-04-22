import { store } from '@fower/store'
export * from './css'
export * from './createStyle'
export * from './keyframes'
export * from './injectGlobalStyle'

const { setConfig, getConfig, setTheme, getTheme, addAtom, composeAtom } = store

export { setConfig, getConfig, setTheme, getTheme, addAtom, composeAtom }
