import { css } from '@styli/core'

export default {
  name: 'css',
  bind: function (el: HTMLElement, bind: any) {
    const props: any = {}

    for (const { name, value } of Object.values(el.attributes)) {
      props[name] = value === '' ? true : value
    }

    const value = bind.value || ''

    value.split(/\s+/).forEach((i) => {
      props[i] = true
    })

    const className = css(Object.keys(props).join(' '))
    if (className) el?.classList.add(...className.split(' '))
  },
}
