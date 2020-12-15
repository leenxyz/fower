import { createElement } from 'react'
import { Sheet, styleManager, styli } from '@styli/core'
import { trimStr } from '@styli/utils'

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

  const sheet = new Sheet(props, styli.getTheme())
  const parsedProps: any = sheet.getParsedProps()
  const inline = styli.getConfig('inline')

  if (inline) {
    if (Array.isArray(props.style)) {
      parsedProps.style = [sheet.toStyles(), props.style]
    } else {
      parsedProps.style = { ...sheet.toStyles(), ...props.style }
    }
  } else {
    const { className = '' } = props || {}
    styleManager.insertStyles(sheet.toCss())
    const finalClassName = trimStr(`${sheet.getClassNames()} ${className}`)
    if (finalClassName) parsedProps.className = finalClassName
  }

  return createElement.apply(null, [element, parsedProps, ...children])
}
