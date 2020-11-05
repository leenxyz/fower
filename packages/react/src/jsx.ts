import { createElement } from 'react'
import { Sheet, styli } from '@styli/core'

/**
 * JSX Pragma
 * TODO: this is minimal version
 * @param element element type
 * @param props element props
 * @param children  element children
 */
export function jsx(element: string, props: any, ...children: any[]) {
  // Do'not handle third-party Component
  if (typeof element !== 'string') {
    return createElement.apply(null, arguments as any)
  }

  const newProps: any = new Sheet(props, styli.config.theme).getParsedProps()
  return createElement.apply(null, [element, newProps, ...children])
}
