import { store } from '@styli/store'

export * from './api'

const { config, theme, configure, setTheme, getTheme, registerAtomicProps } = store

export { config, configure, theme, setTheme, getTheme, registerAtomicProps }
