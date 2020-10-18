import { PlainObject, Plugin, StyliStyle } from '../types'
import { kebab, memorize } from '../utils'

const canUseDom = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

const getClassName = (function () {
  let seed = 0
  let cache: any = {}
  return (key: string) => {
    cache[key] = cache[key] || `styli-${seed++}`
    return cache[key]
  }
})()

function styleToCss(style: StyliStyle) {
  const className = getClassName(JSON.stringify(style))
  let cssFragment = ''
  for (let [key, value] of Object.entries(style)) {
    const cssKeyName = kebab(key)
    cssFragment = `${cssFragment} ${cssKeyName}: ${value};`
  }
  cssFragment = `.${className} { ${cssFragment} }`
  return { cssFragment, className }
}

const createStyliTag = memorize(() => {
  const tag = document.createElement('style')
  tag.dataset.styli = 'styli'
  document.querySelector('head')?.append(tag)
  return tag
})

export const toCss: Plugin = {
  name: 'className',
  version: '1.0.0',
  exec: (styliStyle: StyliStyle, props: PlainObject) => {
    if (!canUseDom) return console.error('current environment is not support')
    const tag = createStyliTag('tag')
    const { cssFragment, className } = styleToCss(styliStyle)
    tag.innerHTML = tag.innerHTML + cssFragment
    return `${className} ${props.className || ''}`
  },
}
