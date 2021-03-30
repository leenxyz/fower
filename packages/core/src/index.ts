import { styli } from './styli'
export * from './api'
export { styli } from './styli'

const { setTheme } = styli
const theme = styli.config.theme

export { setTheme, theme }
