import { PlainObject, StyliUnit } from './index'

export type PluginFn = (
  finalProps: PlainObject,
  styliUnits: StyliUnit[],
  props: PlainObject,
) => PlainObject

export type PluginWrapper = (config?: PluginConfig) => PluginFn

export interface PluginConfig {
  [key: string]: any
}

export type Plugin = [PluginWrapper, PluginConfig?] | PluginWrapper
