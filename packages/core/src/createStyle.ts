import { CSSProperties } from 'react'
import { Sheet } from './Sheet'
import { styli } from './styli'
import { modifierToProps } from './utils'

export function createStyle(...args: (string | CSSProperties)[]): CSSProperties {
  return args.reduce((result, cur) => {
    if (typeof cur === 'string') {
      const props = modifierToProps(cur)
      const sheet = new Sheet(props, styli.config.theme)
      const style = sheet.toStyles()
      return { ...result, ...style }
    }
    return { ...result, ...cur }
  }, {} as any)
}
