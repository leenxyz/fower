import { PlainObject, StyliStyle } from '../../types'
import { isEmptyObj, kebab } from '../../utils'
import { generateClassName } from './generateClassName'

export function styliStyleToCss(style: StyliStyle, breakpoints: number[]) {
  if (isEmptyObj(style)) return {}

  let className = generateClassName(JSON.stringify(style))
  let cssFragment = ''
  let cssFragmentList: string[] = []
  let cssMediaFragmentList: string[] = []

  for (let [key, value] of Object.entries(style)) {
    const cssKeyName = kebab(key)
    // media queries
    if (Array.isArray(value)) {
      if (!breakpoints.length) {
        throw new Error('breakpoints is not provide, array value is not support')
      }
      for (let i = 0; i < breakpoints.length; i++) {
        cssMediaFragmentList[i] = `${cssMediaFragmentList[i] || ''} ${cssKeyName}: ${value[i]};`
      }
    } else if (typeof value === 'object') {
      switch (key) {
        case 'css': {
          cssFragmentList = getPaths(value)
            .reduce((result: any, path: string[]) => {
              const attrValue = path.reduce((obj: any, c: string) => obj[c], value)
              const attr = kebab('' + path.pop())
              const str = path.join(' ')

              const obj = { key: `.${className} ${str}`, value: { [attr]: attrValue } }

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
      }
    } else {
      cssFragment = `${cssFragment} ${cssKeyName}: ${value};`
    }
  }

  cssMediaFragmentList = cssMediaFragmentList.map((fragment) => `.${className} { ${fragment} }`)
  cssFragment = `.${className} { ${cssFragment} }`

  return { cssFragment, className, cssMediaFragmentList, cssFragmentList }
}

// find all attr paths
function getPaths(object: PlainObject): any {
  return (
    object &&
    typeof object === 'object' &&
    Object.keys(object).reduce(
      (p, k) => (getPaths(object[k]) || [[]]).reduce((r: any, a: any) => [...r, [k, ...a]], p),
      [],
    )
  )
}
