import { PlainObject } from '../../types'
import {
  getStyleElement,
  getStyliElementContent,
  setStyliElementContent,
  getMediaStyliElement,
  getMediaElementContent,
  setMediaElementContent,
} from './styliTag'
import { Sheet } from '../../Sheet'
import { Styli } from '../../styli'

export function toCss(finalProps: PlainObject, sheet: Sheet) {
  const styleElement = getStyleElement('styli')

  const className = sheet.getClassNames()
  const cssFragment = sheet.getRulesCss()
  const mediaCssFragmentList = sheet.getRulesMediaCss()

  // render common css
  if (!setStyliElementContent.cache[cssFragment] && cssFragment) {
    const content = getStyliElementContent(styleElement)
    setStyliElementContent(cssFragment, styleElement, `${content}${cssFragment} `)
  }

  // render media css
  if (mediaCssFragmentList.length) {
    const breakpoints = Styli.getConfig<number[]>('breakpoints')
    breakpoints.forEach((breakpoint: number, idx: number) => {
      const cssFragment = mediaCssFragmentList[idx]
      const cacheKey = breakpoint + cssFragment

      if (!setMediaElementContent.cache[cacheKey] && cssFragment) {
        const mediaElement = getMediaStyliElement('' + idx, breakpoint)
        const content = getMediaElementContent(mediaElement)
        setMediaElementContent(cacheKey, mediaElement, breakpoint, `${content}${cssFragment} `)
      }
    })
  }

  const finalClassName = `${className || ''}${
    finalProps.className ? ' ' + finalProps.className : ''
  }`
  if (finalClassName) {
    finalProps.className = finalClassName
  }

  return finalProps
}
