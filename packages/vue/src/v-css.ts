import { Sheet, styli, styleManager } from '@styli/core'

export default {
  name: 'css',
  bind: function (el: HTMLElement, bind: any) {
    const props: any = {}

    /** handle children */
    for (const { name, value } of Object.values(el.attributes)) {
      if (name) {
        props[name] = value === '' ? true : value
      }
    }

    /** handle v-css value */
    const value = bind.value || ''
    value.split(/\s+/).forEach((i: any) => {
      if (i) props[i] = true
    })

    /** insert css to style */
    const sheet = new Sheet(props, styli.config.theme)
    styleManager.insertStyles(sheet.toCss())

    /** rm no use attr */
    sheet.atoms.map((atom) => {
      el.removeAttribute(atom.propKey)
    })

    /** set className to el */
    const className = sheet.getClassNames()
    if (className) el?.classList.add(...className.split(' '))
  },
}
