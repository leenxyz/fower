import { PlainObject, StyliStyle } from '../types'
import { kebab, canUseDom, hash, memorize } from '../utils'

function generateStyliTag(name: string) {
  const tag = document.createElement('style')
  tag.dataset.styli = name
  document.querySelector('head')?.append(tag)
  return tag
}

const getMediaStyliTag = memorize((value: number) => {
  const tag = generateStyliTag(`media-styli-${value}`)
  tag.innerHTML = `@media (min-width: ${value}px}) {}`
  return tag
})

const generateClassName = memorize((key: string) => `styli-${hash(key)}`)

function styliStyleToCss(style: StyliStyle, breakpoints: number[]) {
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
    } else {
      cssFragment = `${cssFragment} ${cssKeyName}: ${value};`
    }
  }

  cssFragmentList = cssFragmentList.map((fragment) => `.${className} { ${fragment} }`)
  cssFragment = `.${className} { ${cssFragment} }`

  return { cssFragment, className, cssFragmentList }
}

function getMediaTagContent(tag: any) {
  const content = tag.innerHTML
  const [, match = ''] = content.match(/{(.*)}/) || []
  return match
}

const setMediaTagContent = memorize((tag: any, breakpoint: number, content: string) => {
  tag.innerHTML = `@media (min-width: ${breakpoint}px) {${content}}`
  return true
})

const setStyliTagContent = memorize((tag: any, content: string) => {
  tag.innerHTML = tag.innerHTML + content
  return true
})

interface ToCSSConfig {
  breakpoints?: number[]
}

export function toCss(config?: ToCSSConfig) {
  const breakpoints = config?.breakpoints || [640, 768, 1024, 1280]
  const styliTag = generateStyliTag('styli')

  return function (finalProps: PlainObject, styliStyle: StyliStyle, props: PlainObject) {
    if (!canUseDom) {
      throw new Error('current environment is not support this plugin')
    }

    const { cssFragment, className, cssFragmentList } = styliStyleToCss(styliStyle, breakpoints)

    /**
     * if cssFragment has been inserted into dom, ignore next same cssFragment
     */
    if (!setStyliTagContent.cache[className]) {
      setStyliTagContent(className, styliTag, cssFragment)
    }

    cssFragmentList.forEach((mediaCSSFragment, idx) => {
      const breakpoint = breakpoints[idx]
      const tag = getMediaStyliTag('' + idx, breakpoint)
      const content = getMediaTagContent(tag)
      const cacheKey = breakpoint + mediaCSSFragment
      if (!setMediaTagContent.cache[cacheKey]) {
        setMediaTagContent(cacheKey, tag, breakpoint, `${content} ${mediaCSSFragment}`)
      }
    })

    finalProps.className = `${className} ${props.className || ''}`

    return finalProps
  }
}
