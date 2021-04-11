import { createStyle, css } from '@styli/core'
import { Parser } from '@styli/parser'
import { Args } from './types'

// handle inline style
export function getInLineParsedProps(props: any, args: Args) {
  const parser = new Parser(props)
  const parsedProps = parser.getParsedProps()

  if (Array.isArray(props.style)) {
    parsedProps.style = [createStyle(...args), parser.toStyle(), props.style]
  } else {
    parsedProps.style = {
      ...createStyle(...args),
      ...parser.toStyle(),
      ...props.style,
    }
  }

  return parsedProps
}

// handle css style
export function getCssParsedProps(props: any, args: Args) {
  const parser = new Parser(props)
  const parsedProps = parser.getParsedProps()

  const finalClassName = [css(...(args as any)), ...parser.getClassNames()].join(' ').trim()

  parsedProps.className = finalClassName
  parser.insertRule()

  return parsedProps
}
