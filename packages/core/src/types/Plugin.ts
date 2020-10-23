import { PlainObject, StyliStyle } from './index'

export type PluginFn = (
  finalProps: PlainObject,
  styliStyle: StyliStyle,
  props: PlainObject,
) => PlainObject

export type PluginWrapper = (config?: PluginConfig) => PluginFn

export interface PluginConfig {
  [key: string]: any
}

export type Plugin = [PluginWrapper, PluginConfig?] | PluginWrapper
