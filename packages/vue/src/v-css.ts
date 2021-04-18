import { Parser } from '@styli/parser'

function handler(el: HTMLElement, bind: any) {
  const props: any = {}
  const { className } = el

  // TODO: should handle svg
  if (className && typeof className === 'string') {
    props.className = className
  }

  /** handle children */
  for (const { name, value } of Object.values(el.attributes)) {
    if (!name) continue
    props[name] = !value ? true : value
  }

  el.classList.forEach((i) => {
    props[i] = true
  })

  /** handle v-css value */
  const value = bind.value || ''
  value.split(/\s+/).forEach((i: any) => {
    if (i) props[i] = true
  })

  if (!Object.keys(props).length) return

  /** get parser */
  const parser = new Parser(props)

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
  const classList = parser.getClassNames()

  el.classList.add(...classList)
}

export default {
  name: 'css',
  mounted: handler,
  bind: handler,
}
