import { Theme } from '@styli/types'
import { Configuration } from '@styli/types'

export type PartialThemeConfig = Theme | { [key: string]: any }
export type PartialConfig = Configuration | { [key: string]: any }
