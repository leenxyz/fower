import { createStyle, css, Sheet } from '@styli/core'
import { trimStr } from '@styli/utils'
import { Args } from './types'

// handle inline style
export function getInLineParsedProps(props: any, value: any, args: Args) {
  const sheet = new Sheet(props, value)
  const parsedProps = sheet.getParsedProps()

  if (Array.isArray(props.style)) {
    parsedProps.style = [createStyle(...args), sheet.toStyles(), props.style]
  } else {
    parsedProps.style = {
      ...createStyle(...args),
      ...sheet.toStyles(),
      ...props.style,
    }
  }

  return parsedProps
}

// handle css style
export function getCssParsedProps(props: any, value: any, args: Args) {
  const sheet = new Sheet(props, value)
  const parsedProps = sheet.getParsedProps()

  const { className = '' } = props || {}

  const finalClassName = trimStr(`${css(...args)} ${sheet.getClassNames()} ${className}`)

  if (finalClassName) {
    parsedProps.className = finalClassName
    sheet.insertRule()
  }

  return parsedProps
}
