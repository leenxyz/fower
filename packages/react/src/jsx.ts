import { createElement } from 'react'
import { store } from '@styli/store'
import { Parser } from '@styli/parser'

/**
 * JSX Pragma
 * TODO: this is minimal version
 * @param element element type
 * @param props element props
 * @param children  element children
 */
export function jsx(element: string, props: any = {}, ...children: any[]) {
  // Do'not handle third-party Component
  if (typeof element !== 'string') {
    return createElement.apply(null, arguments as any)
  }

  const parser = new Parser(props)
  const parsedProps: any = parser.getParsedProps()
  const { inline } = store.config

  if (inline) {
    if (Array.isArray(props.style)) {
      parsedProps.style = [parser.toStyle(), props.style]
    } else {
      parsedProps.style = { ...parser.toStyle(), ...props.style }
    }
  } else {
    const { className = '' } = props || {}
    parser.insertRule()
    const finalClassName = parser.getClassNames(className).join(' ').trim()
    if (finalClassName) parsedProps.className = finalClassName
  }

  return createElement.apply(null, [element, parsedProps, ...children])
}
