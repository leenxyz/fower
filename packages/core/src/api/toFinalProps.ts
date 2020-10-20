import { Styli } from '../styli'
import { Plugin } from '../types'
import { parseModifiers } from './parseModifiers'

export function toFinalProps(props: any) {
  const { styliKeys = [], styliStyle = {} } = parseModifiers(props)

  const finalProps = Object.keys(props).reduce((result, key) => {
    if (styliKeys.includes(key)) return result
    return { ...result, [key]: props[key] }
  }, {} as any)

  // TODO: @qianjin 未处理 empty plugin
  const plugins = Styli.getConfig('plugins') as Plugin[]

  // 临时代码
  if (!plugins.length) {
    finalProps.style = styliStyle
    return finalProps
  }

  return plugins.reduce((finalProps, plugin) => {
    const { name, exec } = plugin
    finalProps[name] = exec(styliStyle, props)
    return finalProps
  }, finalProps)
}
