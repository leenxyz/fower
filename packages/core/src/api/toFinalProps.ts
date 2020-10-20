import { Styli } from '../styli'
import { Plugin } from '../types'
import { parseModifiers } from './parseModifiers'

export function toFinalProps(props: any) {
  const { styliKeys = [], styliStyle = {} } = parseModifiers(props)

  const finalProps = Object.keys(props).reduce((result, key) => {
    if (styliKeys.includes(key)) return result
    return { ...result, [key]: props[key] }
  }, {} as any)

  // use default plugin toStyle if custom plugins not provide
  const plugins = Styli.getConfig('plugins') as Plugin[]

  return plugins.reduce((finalProps, plugin) => {
    const { name, exec } = plugin
    finalProps[name] = exec(styliStyle, props)
    return finalProps
  }, finalProps)
}
