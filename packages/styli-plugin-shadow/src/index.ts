import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValueProp } from '@styli/utils'

export function isShadowKey(key: string) {
  return /^shadow(SM|MD|LG|XL|2XL|Outline|None|Inner)?$/i.test(key)
}

export function shadowPropToStyle(key: string, propValue: any) {
  if (isValueProp(propValue)) return { boxShadow: propValue }
  const value = key.replace('shadow', '')
  const shadowSize = value.toLowerCase()
  const shadows: any = styli.getTheme().shadows

  const shadowValue = shadows[shadowSize || 'base']

  if (!shadowValue) {
    console.error('can‘t find shadow size:', shadowValue)
  }
  return { boxShadow: shadowValue }
}

export default (): StyliPlugin => {
  return {
    isMatch: isShadowKey,
    handleAtom(atom) {
      atom.style = shadowPropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
