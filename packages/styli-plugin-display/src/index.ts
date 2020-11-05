import { Plugin } from '@styli/core'
import { kebab } from '@styli/utils'

export const displayTypes = ['hide', 'display', 'inline', 'inlineBlock', 'block', 'grid', 'table']

export function isDisplayKey(key: string) {
  return /^(hide|inline|inlineBlock|block|grid|table)$|^display(-.+)?/.test(key)
}

export function displayPropToStyle(prop: string, propValue: any): any {
  /** hide */
  if (prop == 'hide') return { display: 'none' }

  /** display */
  if (/^display(-.+)?/.test(prop)) {
    if (typeof propValue === 'string' || Array.isArray(propValue)) return { display: propValue }

    return { display: kebab(prop.replace(/^display-/, '')) }
  }

  return { display: kebab(prop) }
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-display',
    isMatch: isDisplayKey,
    onVisitProp(atom) {
      atom.style = displayPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
