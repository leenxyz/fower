import { noCase } from 'no-case'
import { StyliPlugin, PluginCategory } from '@styli/types'

export function upFirst(s: string = '') {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function downFirst(s: string = '') {
  return s.charAt(0).toLowerCase() + s.slice(1)
}

export function kebab(s: string) {
  return noCase(s).replace(/\s/g, '-')
}

export function isNumber(str: any) {
  return /^-?[0-9.]+$/.test(str)
}

export function isValidPropValue(value: any) {
  return !!value && typeof value !== 'boolean'
}

export function isEmptyObj(props: any) {
  return !props || !Object.keys(props).length
}

export function isPercentNumber(s: string) {
  return /^-?\d+p$/.test(s)
}

export function isPlainType(value: any) {
  const plainTypes = ['number', 'string', 'boolean']
  return plainTypes.includes(typeof value)
}

export function isPlainDirective(key: string) {
  return /^[\dA-Za-z]+(--?([\dA-Za-z])+)*$/.test(key)
}

export function cssKeyToStyleKey(key: string) {
  return /^[A-Z].+$/.test(key) ? '-' + kebab(key) : kebab(key)
}

export function cssObjToStr(style: any, initStr = '') {
  return Object.entries(style).reduce((r, [key, value]) => {
    return r + `${cssKeyToStyleKey(key)}: ${value};`
  }, initStr)
}

export function modifierToProps(modifier: string) {
  return modifier.split(/[\s\t\n]+/).reduce((result, cur) => ({ ...result, [cur]: true }), {})
}

export function classifyPlugins(plugins: StyliPlugin[]): PluginCategory {
  return plugins.reduce(
    (result, cur) => {
      if (cur.onAtomModify) {
        result.atomModifiers.push(cur)
      }
      if (cur.onAtomStyleCreate) {
        result.atomStyleCreations.push(cur)
      }
      if (cur.onStyleCreate) {
        result.styleCreations.push(cur)
      }
      return result
    },
    {
      atomModifiers: [],
      atomStyleCreations: [],
      styleCreations: [],
    } as PluginCategory,
  )
}
