import { createStyle } from '@styli/core'

export default {
  name: 'css',
  bind: function (el: HTMLElement, bind: any) {
    const props: any = {}

    for (const { name, value } of Object.values(el.attributes)) {
      props[name] = value === '' ? true : value
    }

    const value: string = bind.value || ''

    value.split(/\s+/).forEach((i) => {
      props[i] = true
    })

    const styles: any = createStyle(Object.keys(props).join(' '))
    for (const key in styles) {
      el.style[key as any] = styles[key]
    }
  },
}
