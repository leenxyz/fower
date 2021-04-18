import { Theme } from '@fower/types'
import { Configuration } from '@fower/types'

export type PartialThemeConfig = Theme | { [key: string]: any }
export type PartialConfig = Configuration | { [key: string]: any }
