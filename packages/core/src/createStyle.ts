import { CSSProperties } from 'react'
import { Sheet } from './Sheet'
import { Theme } from './types'
import { modifierToProps } from './utils'

export function createStyle(...args: (string | CSSProperties)[]): CSSProperties {
  return args.reduce((result, cur) => {
    if (typeof cur === 'string') {
      const props = modifierToProps(cur)
      // TODO: theme
      const sheet = new Sheet(props, {} as Theme)
      const style = sheet.toStyles()
      return { ...result, ...style }
    }
    return { ...result, ...cur }
  }, {} as any)
}
