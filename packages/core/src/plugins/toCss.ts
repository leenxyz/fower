import { PlainObject, StyliStyle } from '../types'
import { kebab, memorize } from '../utils'

const canUseDom = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

interface ToCSSConfig {
  mediaList?: number[]
}

export class ToCss {
  name: string
  version: string
  config: ToCSSConfig

  constructor(config: ToCSSConfig) {
    this.name = 'className'
    this.version = '1.0.0'
    this.config = config
  }

  getClassName = (function () {
    let seed = 0
    let cache: any = {}
    return (key: string) => {
      cache[key] = cache[key] || `styli-${seed++}`
      return cache[key]
    }
  })()

  /**
   * use memorize function cache style tag
   */
  createStyliTag = memorize(() => {
    const tag = document.createElement('style')
    tag.dataset.styli = 'styli'
    document.querySelector('head')?.append(tag)
    return tag
  })

  /**
   * convert styliStyle to CSS
   */
  styleToCss(style: StyliStyle) {
    const className = this.getClassName(JSON.stringify(style))
    let cssFragment = ''
    for (let [key, value] of Object.entries(style)) {
      const cssKeyName = kebab(key)
      // TODO: media query
      if (Array.isArray(value)) {
      } else {
        cssFragment = `${cssFragment} ${cssKeyName}: ${value};`
      }
    }
    cssFragment = `.${className} { ${cssFragment} }`
    return { cssFragment, className }
  }

  exec(styliStyle: StyliStyle, props: PlainObject) {
    if (!canUseDom) {
      throw new Error('current environment is not support this plugin')
    }
    const tag = this.createStyliTag('tag')
    const { cssFragment, className } = this.styleToCss(styliStyle)
    tag.innerHTML = tag.innerHTML + cssFragment

    return `${className} ${props.className || ''}`
  }
}
