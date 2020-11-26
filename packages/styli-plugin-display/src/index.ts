import { StyliPlugin } from '@styli/types'
import { kebab } from '@styli/utils'

export function isDisplayKey(key: string) {
  return /^(hide|inline|inline[Bb]lock|block|flex|grid|table).*$|^display(-.+)?/.test(key)
}

export function displayPropToStyle(prop: string, propValue: any): any {
  if (prop == 'hide') return { display: 'none' }

  /** display */
  if (/^display(-.+)?/.test(prop)) {
    if (typeof propValue === 'string') return { display: propValue }

    return { display: kebab(prop.replace(/^display-/, '')) }
  }

  return { display: kebab(prop) }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-display',
    isMatch: isDisplayKey,
    onVisitProp(atom) {
      atom.style = displayPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
