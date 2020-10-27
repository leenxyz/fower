import { PlainObject } from '../../types'
import { getPlainObjectPaths, kebab } from '../../utils'

// pseudo-class pseudo-element should connect selector string directly
const getPrefix = (v: string) => (/^::?.*/.test(v) ? '' : ' ')

export function parseCssProp(className: string, value: PlainObject) {
  return getPlainObjectPaths(value)
    .reduce((result: any, path: string[]) => {
      const attrValue = path.reduce((obj: any, c: string) => obj[c], value)
      const attr = kebab('' + path.pop())

      const str = path.reduce((result, value) => `${result}${getPrefix(value)}${value}`, '')

      const obj = {
        key: `.${className}${getPrefix(str)}${str}`,
        value: { [attr]: attrValue },
      }

      // merge same class
      const idx = result.findIndex((a: any) => a.key === obj.key)
      if (idx === -1) {
        result = result.concat(obj)
      } else {
        const { key, value } = result[idx]
        result[idx] = { key, value: { ...obj.value, ...value } }
      }
      return result
    }, [])
    .map(({ key, value }: any) => {
      let str = ''
      for (let i in value) {
        str = `${str}${[i]}: ${value[i]};`
      }
      return `${key}{${str}}`
    })
}
