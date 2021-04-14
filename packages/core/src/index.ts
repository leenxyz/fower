import { store } from '@styli/store'
export * from './css'
export * from './createStyle'
export * from './keyframes'
export * from './injectGlobalStyle'

const { configure, setTheme, getTheme, registerAtomicProps } = store

export { configure, setTheme, getTheme, registerAtomicProps }
