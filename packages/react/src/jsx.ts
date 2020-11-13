import { createElement } from 'react'
import { Sheet, styleManager, styli } from '@styli/core'

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

  const sheet = new Sheet(props, styli.config.theme)
  const parsedProps: any = sheet.getParsedProps()

  if (sheet.isInline()) {
    if (Array.isArray(props.style)) {
      parsedProps.style = [props.style, parsedProps.toStyle()]
    } else {
      parsedProps.style = { ...props.style, ...parsedProps.toStyle() }
    }
  } else {
    const { className } = props
    styleManager.insertStyles(sheet.toCss())
    const finalClassName = `${className || ''} ${sheet.getClassNames()}`.trim()
    if (finalClassName) parsedProps.className = finalClassName
  }

  return createElement.apply(null, [element, parsedProps, ...children])
}
