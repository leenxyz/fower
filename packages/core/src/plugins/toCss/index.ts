import { PlainObject, StyliUnit } from '../../types'
import { canUseDom, kebab } from '../../utils'
import {
  getStyliTag,
  getStyliTagContent,
  setStyliTagContent,
  getMediaStyliTag,
  getMediaTagContent,
  setMediaTagContent,
} from './styliTag'
import { generateClassName } from './generateClassName'
import { Styli } from '../../styli'

export function toCss() {
  if (!canUseDom) {
    throw new Error('current environment is not support this plugin')
  }

  const styliTag = getStyliTag('styli')
  const breakpoints = Styli.getConfig<number[]>('breakpoints')

  return function (finalProps: PlainObject, styliUnits: StyliUnit[], props: PlainObject) {
    const className = generateClassName(JSON.stringify(styliUnits))

    let cssF = ''
    let cssFList: any = []

    // handle common or media queries cssFragment
    styliUnits.forEach((styli) => {
      const { attr, value, media } = styli
      const name = kebab(attr)
      if (media) {
        const idx = breakpoints.findIndex((v) => '' + v === media + '')
        cssFList[idx] = `${cssFList[idx] || ''}${name}:${value};`
      } else {
        cssF = `${cssF}${name}:${value};`
      }
    })

    // render common cssFragment
    if (!setStyliTagContent.cache[cssF] && cssF) {
      const content = getStyliTagContent(styliTag)
      setStyliTagContent(cssF, styliTag, `${content || ''} .${className} {${cssF}}`)
    }

    // render media queries cssFragment
    cssFList.forEach((cssF: string, idx: number) => {
      if (!setMediaTagContent.cache[cssF] && cssF) {
        const tag = getMediaStyliTag('' + breakpoints[idx])
        const content = getMediaTagContent(tag)
        setMediaTagContent(cssF, tag, breakpoints[idx], `${content || ''} .${className} {${cssF}}`)
      }
    })

    finalProps.className = `${className} ${finalProps.className || ''} ${props.className || ''}`

    return finalProps
  }
}
