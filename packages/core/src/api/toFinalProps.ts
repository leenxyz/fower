import { Styli } from '../styli'
import { PlainObject, Plugin, PluginWrapper, StyliUnit } from '../types'
import { isEmptyObj } from '../utils'
import { parseModifiers } from './parseModifiers'

export function toFinalProps(props: any) {
  if (isEmptyObj(props)) return {}

  const { styliKeys = [], styliUnits = [] } = parseModifiers(props)

  const finalProps = Object.keys(props).reduce((result, key) => {
    if (styliKeys.includes(key)) return result
    return { ...result, [key]: props[key] }
  }, {} as any)

  const plugins = Styli.getConfig<Plugin[]>('plugins')
  return traversingPlugins(plugins.slice(), finalProps, styliUnits, props)
}

function traversingPlugins(
  plugins: Plugin[],
  finalProps: PlainObject,
  styliUnits: StyliUnit[],
  props: PlainObject,
): PlainObject {
  if (!plugins.length) return finalProps

  const plugin = plugins.shift()

  const [fn, config] = Array.isArray(plugin) ? plugin : [plugin as PluginWrapper]
  finalProps = fn(config)(finalProps, styliUnits, props)

  return traversingPlugins(plugins, finalProps, styliUnits, props)
}
