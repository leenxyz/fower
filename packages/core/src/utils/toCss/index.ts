import { PlainObject } from '../../types'
import { canUseDom } from '../../utils'
import {
  getStyleElement,
  getStylieElementContent,
  setStyliTagContent,
  getMediaStyliTag,
  getMediaTagContent,
  setMediaTagContent,
} from './styliTag'
import { styliStyleToCss } from './styliStyleToCss'
import { Sheet } from '../../Sheet'

interface ToCSSConfig {
  breakpoints?: number[]
}

export function toCss(config?: ToCSSConfig) {
  if (!canUseDom) {
    throw new Error('current environment is not support this plugin')
  }

  const breakpoints = config?.breakpoints || [0, 640, 768, 1024, 1280]
  const styleElement = getStyleElement('styli')

  return function (finalProps: PlainObject, styliStyle: any, sheet: Sheet) {
    const result = styliStyleToCss(styliStyle, breakpoints, sheet)
    const { cssMediaFragmentList = [] } = result
    const cssFragment = sheet.toCss()

    let className = sheet.getClassNames()

    /**
     * if cssFragment has been inserted into dom, ignore next same cssFragment
     */
    if (!setStyliTagContent.cache[cssFragment]) {
      const content = getStylieElementContent(styleElement)
      setStyliTagContent(cssFragment, styleElement, `${content} ${cssFragment}`)
    }

    cssMediaFragmentList.forEach((mediaCSSFragment, idx) => {
      const breakpoint = breakpoints[idx]
      const cacheKey = breakpoint + mediaCSSFragment

      if (!setMediaTagContent.cache[cacheKey]) {
        const tag = getMediaStyliTag('' + idx, breakpoint)
        const content = getMediaTagContent(tag)
        setMediaTagContent(cacheKey, tag, breakpoint, `${content} ${mediaCSSFragment}`)
      }
    })

    finalProps.className = `${className || ''} ${finalProps.className || ''}`

    return finalProps
  }
}
