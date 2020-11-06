import { Plugin, styli } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

export function isShadowKey(key: string) {
  return /^shadow(XS|SM|Base|MD|LG|XL|XXL|Outline|None|Inner)?$/.test(key)
}

export function shadowPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { boxShadow: propValue }
  const value = prop.replace('shadow', '')
  const shadowSize = value.toLowerCase()
  const shadows = styli.getTheme('shadow') || {}

  const shadowValue = shadows[shadowSize]

  console.log('show', shadowSize, shadows)

  if (!shadowValue) {
    console.error('can‘t find shadow size')
  }
  return { boxShadow: shadowValue }
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-shadow',
    isMatch: isShadowKey,
    onVisitProp(atom) {
      atom.style = shadowPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
