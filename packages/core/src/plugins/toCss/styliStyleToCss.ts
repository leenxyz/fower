import { StyliStyle } from '../../types'
import { kebab } from '../../utils'
import { generateClassName } from './generateClassName'

export function styliStyleToCss(style: StyliStyle, breakpoints: number[]) {
  let className = generateClassName(JSON.stringify(style))
  let cssFragment = ''
  let cssFragmentList: string[] = []

  for (let [key, value] of Object.entries(style)) {
    const cssKeyName = kebab(key)
    // media queries
    if (Array.isArray(value)) {
      if (!breakpoints.length) {
        throw new Error('breakpoints is not provide, array value is not support')
      }
      for (let i = 0; i < breakpoints.length; i++) {
        cssFragmentList[i] = `${cssFragmentList[i] || ''} ${cssKeyName}: ${value[i]};`
      }
    } else if (typeof value === 'object') {
      switch (key) {
        // TODO: handle css directives
        case 'css': {
          console.log('handle css directives')
        }
      }
    } else {
      cssFragment = `${cssFragment} ${cssKeyName}: ${value};`
    }
  }

  cssFragmentList = cssFragmentList.map((fragment) => `.${className} { ${fragment} }`)
  cssFragment = `.${className} { ${cssFragment} }`

  return { cssFragment, className, cssFragmentList }
}
