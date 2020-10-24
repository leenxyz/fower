import { memorize } from '../../utils'

export function generateStyliTag(name: string) {
  const tag = document.createElement('style')
  tag.dataset.styli = name

  // TODO: if user can config mounted tag
  const mountedTag = document.querySelector('head')

  if (!mountedTag) throw new Error('can not find <head> tag to mounted')

  mountedTag.append(tag)

  return tag
}

export const getStyliTag = () => generateStyliTag('styli')

export const getStyliTagContent = (tag: any) => tag.innerHTML

export const setStyliTagContent = memorize((tag: any, content: string) => {
  tag.innerHTML = content
  return true
})

export const getMediaStyliTag = memorize((value: number) => {
  const tag = generateStyliTag(`media-styli-${value}`)
  tag.innerHTML = `@media (min-width: ${value}px}) {}`
  return tag
})

export function getMediaTagContent(tag: any) {
  const content = tag.innerHTML
  const [, match = ''] = content.match(/{(.*)}/) || []
  return match
}

export const setMediaTagContent = memorize((tag: any, breakpoint: number, content: string) => {
  tag.innerHTML = `@media (min-width: ${breakpoint}px) {${content}}`
  return true
})
