import { styli } from '@styli/core'
import { preset } from './preset'

styli.configure(() => preset)

export * from '@styli/theming'
export * from '@styli/core'
export * from '@styli/styled'
export * from './components'
