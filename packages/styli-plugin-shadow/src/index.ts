import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export function isShadowKey(key: string) {
  return /^shadow(XS|SM|Base|MD|LG|XL|XXL|Outline|None|Inner)?$/.test(key)
}

export function shadowPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { boxShadow: propValue }
  const value = prop.replace('shadow', '')
  const shadowSize = value.toLowerCase()
  const shadow = styli.getTheme().shadow as any
  const shadowValue = shadow[shadowSize || 'base']

  if (!shadowValue) {
    console.error('can‘t find shadow size')
  }
  return { boxShadow: shadowValue }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-shadow',
    isMatch: isShadowKey,
    onAtomStyleCreate(atom) {
      atom.style = shadowPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
