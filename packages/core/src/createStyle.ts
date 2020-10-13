import { parseModifiers } from './modifier'

export interface Style {
  [key: string]: any
}

export function createStyle(...args: any): Style {
  return args.reduce((t: Style, c: any) => {
    if (typeof c === 'string') {
      const props = c
        .split(/[\s|\t|\n]+/)
        .reduce((result, cur) => ({ ...result, [cur]: true }), {} as any)
      const { style } = parseModifiers(props)
      return { ...t, ...style }
    }
    return { ...t, ...c }
  }, {})
}
