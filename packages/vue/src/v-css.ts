import { Sheet, styli, styleManager } from '@styli/core'

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

    /** get sheet */
    const sheet = new Sheet(props, styli.getTheme())

    /** insert css to style element */
    styleManager.insertStyles(sheet.toCss())

    /** rm no use attr */
    const parsedProps = sheet.getParsedProps()
    for (const key in parsedProps) {
      el.removeAttribute(key)
    }

    /** set className to el */
    const className = sheet.getClassNames()
    const classList = (className || '').split(' ').filter(Boolean)

    el?.classList.add(...classList)
  },
}
