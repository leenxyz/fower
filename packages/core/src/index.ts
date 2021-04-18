import { store } from '@fower/store'
export * from './css'
export * from './createStyle'
export * from './keyframes'
export * from './injectGlobalStyle'

const { setConfig, setTheme, getTheme, registerAtomicProps } = store

export { setConfig, setTheme, getTheme, registerAtomicProps }
