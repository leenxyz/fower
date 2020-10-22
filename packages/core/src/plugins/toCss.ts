import { PlainObject, StyliStyle } from '../types'
import { kebab, canUseDom } from '../utils'

function generateStyliTag(name: string) {
  const tag = document.createElement('style')
  tag.dataset.styli = name
  document.querySelector('head')?.append(tag)
  return tag
}

function generateMediaStyliTag(value: number) {
  const tag = generateStyliTag(`mediaStyli${value}`)
  tag.innerHTML = `@media (min-width: ${value}px}) {}`
  return tag
}

const generateClassName = (function () {
  let seed = 0
  let cache: any = {}
  return (key: string) => {
    cache[key] = cache[key] || `styli-${seed++}`
    return cache[key]
  }
})()

function styliStyleToCss(style: StyliStyle, breakpoints?: number[]) {
  let className = generateClassName(JSON.stringify(style))
  let cssFragment = ''
  let cssFragmentList: string[] = []
  for (let [key, value] of Object.entries(style)) {
    const cssKeyName = kebab(key)
    // media queries
    if (Array.isArray(value)) {
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

function getMediaTagContent(tag: any) {
  const content = tag.innerHTML
  const [, match = ''] = content.match(/{(.*)}/) || []
  return match
}

function setMediaTagContent(tag: any, breakpoint: number, content: string) {
  tag.innerHTML = `@media (min-width: ${breakpoint}px) {${content}}`
}

function setStyliTagContent(tag: any, content: string) {
  tag.innerHTML = tag.innerHTML + content
}

function toCSS() {
  const breakpoints = [640, 768, 1024, 1280]
  const styliTag = generateStyliTag('styli')
  const mediaStyliTag = breakpoints.map((v) => generateMediaStyliTag(v))

  return function (finalProps: PlainObject, styliStyle: StyliStyle, props: PlainObject) {
    if (!canUseDom) {
      throw new Error('current environment is not support this plugin')
    }

    const { cssFragment, className, cssFragmentList } = styliStyleToCss(styliStyle, breakpoints)

    setStyliTagContent(styliTag, cssFragment)

    cssFragmentList.forEach((mediaCSSFragment, idx) => {
      const tag = mediaStyliTag[idx]
      const breakpoint = breakpoints[idx]
      const content = getMediaTagContent(tag)
      setMediaTagContent(tag, breakpoint, `${content} ${mediaCSSFragment}`)
    })

    finalProps.className = `${className} ${props.className || ''}`

    return finalProps
  }
}

export const toCss = toCSS()
