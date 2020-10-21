import { PlainObject, StyliStyle } from '../types'
import { getValue, kebab } from '../utils'

const canUseDom = !!window?.document?.createElement

interface ToCSSConfig {
  breakpoints?: number[]
}

export class ToCss {
  name: string
  version: string
  config: ToCSSConfig
  styliTag: any
  mediaStyliTag: any

  constructor(config?: ToCSSConfig) {
    this.name = 'className'
    this.version = '1.0.0'
    this.config = {
      breakpoints: [640, 768, 1024, 1280],  // set default breakpoints
      ...config,
    }

    this.styliTag = this.generateStyliTag('styli')
    this.mediaStyliTag = (this.config.breakpoints || []).map((v) => this.generateMediaStyliTag(v))
  }

  generateStyliTag(name: string) {
    const tag = document.createElement('style')
    tag.dataset.styli = name
    document.querySelector('head')?.append(tag)
    return tag
  }

  generateMediaStyliTag(value: number) {
    const tag = this.generateStyliTag(`mediaStyli${value}`)
    tag.innerHTML = `@media (min-width: ${value}px}) {}`
    return tag
  }

  generateClassName = (function () {
    let seed = 0
    let cache: any = {}
    return (key: string) => {
      cache[key] = cache[key] || `styli-${seed++}`
      return cache[key]
    }
  })()

  styliStyleToCss(style: StyliStyle) {
    let className = this.generateClassName(JSON.stringify(style))
    let cssFragment = ''
    let cssFragmentList: string[] = []
    for (let [key, value] of Object.entries(style)) {
      const cssKeyName = kebab(key)
      // media queries
      if (Array.isArray(value)) {
        const breakpoints = this.config.breakpoints
        if (!breakpoints || !breakpoints.length) {
          throw new Error('breakpoints is not provide, array value is not support')
        }
        for (let i = 0; i < breakpoints.length; i++) {
          cssFragmentList[i] = `${cssFragmentList[i] || ''} ${cssKeyName}: ${value[i]};`
        }
      } else {
        cssFragment = `${cssFragment} ${cssKeyName}: ${value};`
      }
    }

    cssFragmentList = cssFragmentList.map((fragment) => `.${className} { ${fragment} }`)
    cssFragment = `.${className} { ${cssFragment} }`

    return { cssFragment, className, cssFragmentList }
  }

  // get media size content
  getMediaTagContent(idx: number) {
    const content = this.mediaStyliTag[idx].innerHTML
    const [, match = ''] = content.match(/{(.*)}/) || []
    return match
  }

  // set media size content
  setMediaTagContent(idx: number, content: string) {
    const breakpoints = this.config.breakpoints || []
    this.mediaStyliTag[idx].innerHTML = `@media (min-width: ${getValue(
      breakpoints[idx],
    )}) {${content}}`
  }

  // set common content
  setStyliTagContent(content: string) {
    this.styliTag.innerHTML = this.styliTag.innerHTML + content
  }

  exec(styliStyle: StyliStyle, props: PlainObject) {
    if (!canUseDom) {
      throw new Error('current environment is not support this plugin')
    }
    const { cssFragment, className, cssFragmentList } = this.styliStyleToCss(styliStyle)

    this.setStyliTagContent(cssFragment)

    cssFragmentList.forEach((mediaCSSFragment, idx) => {
      const content = this.getMediaTagContent(idx)
      this.setMediaTagContent(idx, `${content} ${mediaCSSFragment}`)
    })

    return `${className} ${props.className || ''}`
  }
}
