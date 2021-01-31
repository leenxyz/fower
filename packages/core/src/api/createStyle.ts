import { CSSProperties } from '@styli/types'
import { modifierToProps } from '@styli/utils'
import { Sheet } from '../Sheet'
import { styli } from '../styli'

export function createStyle(...args: (string | CSSProperties)[]): CSSProperties {
  return args.reduce((result, cur) => {
    if (typeof cur === 'string') {
      const props = modifierToProps(cur)
      const sheet = new Sheet(props, styli.getTheme())
      const style = sheet.toStyles()
      return { ...result, ...style }
    }
    return { ...result, ...cur }
  }, {} as any)
}
