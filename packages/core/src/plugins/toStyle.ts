import { PlainObject, Plugin, StyliStyle } from '../types'

export const toStyle: Plugin = {
  name: 'style',
  version: '1.0.0',
  exec: (styliStyle: StyliStyle, props: PlainObject) => {
    if (Array.isArray(props.style)) return [styliStyle, ...props.style]
    return { ...styliStyle, ...props.style }
  },
}
