import { createElement } from 'react'
import { toFinalProps } from '@styli/core'

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

  const newProps = toFinalProps(props)
  return createElement.apply(null, [element, newProps, ...children])
}
