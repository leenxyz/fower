import { PlainObject, StyliStyle } from '../../types'
import { canUseDom } from '../../utils'
import {
  getStyliTag,
  getStyliTagContent,
  setStyliTagContent,
  getMediaStyliTag,
  getMediaTagContent,
  setMediaTagContent,
} from './styliTag'
import { styliStyleToCss } from './styliStyleToCss'

interface ToCSSConfig {
  breakpoints?: number[]
}

export function toCss(config?: ToCSSConfig) {
  if (!canUseDom) {
    throw new Error('current environment is not support this plugin')
  }

  const breakpoints = config?.breakpoints || [0, 640, 768, 1024, 1280]
  const styliTag = getStyliTag()

  return function (finalProps: PlainObject, styliStyle: StyliStyle, props: PlainObject) {
    const { cssFragment, className, cssFragmentList } = styliStyleToCss(styliStyle, breakpoints)

    /**
     * if cssFragment has been inserted into dom, ignore next same cssFragment
     */
    if (!setStyliTagContent.cache[className]) {
      const content = getStyliTagContent(styliTag)
      setStyliTagContent(className, styliTag, `${content} ${cssFragment}`)
    }

    cssFragmentList.forEach((mediaCSSFragment, idx) => {
      const breakpoint = breakpoints[idx]
      const cacheKey = breakpoint + mediaCSSFragment

      if (!setMediaTagContent.cache[cacheKey]) {
        const tag = getMediaStyliTag('' + idx, breakpoint)
        const content = getMediaTagContent(tag)
        setMediaTagContent(cacheKey, tag, breakpoint, `${content} ${mediaCSSFragment}`)
      }
    })

    finalProps.className = `${className} ${props.className || ''}`

    return finalProps
  }
}
