import { Styli } from '../styli'
import { PlainObject, Plugin } from '../types'
import { parseModifiers } from './parseModifiers'

export function toFinalProps(props: any) {
  const { styliKeys = [], styliStyle = {} } = parseModifiers(props)

  const finalProps = Object.keys(props).reduce((result, key) => {
    if (styliKeys.includes(key)) return result
    return { ...result, [key]: props[key] }
  }, {} as any)

  const plugins = Styli.getConfig('plugins') as Plugin[]
  return traversingPlugins(plugins.slice(), finalProps, styliStyle, props)
}

function traversingPlugins(
  plugins: Plugin[],
  finalProps: PlainObject,
  styliStyle: PlainObject,
  props: PlainObject,
): PlainObject {
  if (!plugins.length) return finalProps
  const fn = plugins.shift() as Plugin
  finalProps = fn(finalProps, styliStyle, props)
  return traversingPlugins(plugins, finalProps, styliStyle, props)
}
