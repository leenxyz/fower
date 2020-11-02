import { Plugin, getValue } from '@styli/core'
import { downFirst, isValidPropValue } from '@styli/utils'

export const leadings: any = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
}

export function isTextLineHeightKey(key: string) {
  return /^lh(None|Tight|Snug|Normal|Relaxed|Loose|-.+)?$/.test(key)
}

export function textLineHeightPropToStyle(prop: string, propValue: any): any {
  if (isValidPropValue(propValue)) {
    return {
      lineHeight: Array.isArray(propValue)
        ? propValue.map((v) => getValue(v))
        : getValue(propValue),
    }
  }
  const [, value = ''] = prop.match(/leading-?(\w+)?/) || []
  // TODO: calc 是否支持 RN
  return {
    lineHeight: !!leadings[downFirst(value)]
      ? `calc(${leadings[downFirst(value)]} * 1em)`
      : getValue(value),
  }
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-line-height',
    isMatch: isTextLineHeightKey,
    onVisitProp(atom) {
      atom.style = textLineHeightPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
