import { styli } from './styli'
export * from './api'
export { styli } from './styli'

const { config, configure, setTheme, getTheme } = styli
const { theme } = config

export { config, configure, theme, setTheme, getTheme }
