import { styli } from '@styli/core'
import { Parser } from '@styli/parser'

function isArray(data: string) {
  return /^\[(\w+,)*\w+\]$/.test(data)
}

export default {
  name: 'css',
  bind: function (el: HTMLElement, bind: any) {
    const props: any = {}

    /** handle children */
    for (const { name, value } of Object.values(el.attributes)) {
      if (name) {
        if (isArray(value)) {
          const [, arrayStr] = value.match(/^\[((\w+,)*\w+)\]$/) || []
          props[name] = arrayStr.split(',')
          continue
        }
        props[name] = !value ? true : value
      }
    }

    /** handle v-css value */
    const value = bind.value || ''
    value.split(/\s+/).forEach((i: any) => {
      if (i) props[i] = true
    })

    /** get parser */
    const parser = new Parser(props, styli.getTheme(), styli)

    /** insert css to style element */
    parser.insertRule()

    /** rm no use attr */
    const parsedProps = parser.getParsedProps()
    Object.values(el.attributes).forEach(({ name }) => {
      if (name && !(name in parsedProps)) {
        el.removeAttribute(name)
      }
    })

    /** set className to el */
    const className = parser.getClassNames()
    const classList = (className || '').split(' ').filter(Boolean)

    el?.classList.add(...classList)
  },
}
