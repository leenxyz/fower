import { styli } from '@styli/core'
import presetDefault from '@styli/preset-default'

export * from './Box'
export * from './components'
export { jsx } from './jsx'

styli.configure(() => presetDefault)
