import { PreprocessorGroup } from 'svelte/types/compiler/preprocess'
import posthtml, { NodeAttributes } from 'posthtml'
import { setConfig } from '@fower/core'
import { Parser } from '@fower/parser'
import { presetWeb } from '@fower/preset-web'

setConfig(presetWeb)

function getProps(attrs: NodeAttributes) {
  const props: any = {}
  const className = attrs.class || ''

  const classArr = className.split(/\s+/)

  // TODO: should handle svg
  if (className && typeof className === 'string') props.className = className

  classArr.forEach((item) => {
    if (item) props[item] = true
  })

  Object.entries(attrs).forEach((item) => {
    const key = item[0]
    const value = item[1]
    if (key === 'class') return
    props[key] = value === '' ? true : value
  })

  return props
}

export function fowerSveltePreprocess(): PreprocessorGroup {
  return {
    script: async () => {
      return null as any
    },
    markup: async ({ content }) => {
      let propList: any[] = []

      const processor: any = posthtml([
        (tree) => {
          tree.walk((node) => {
            if (!node || !node.tag || !node.attrs) return node
            if (['script', 'style'].includes(node.tag)) return node

            const props = getProps(node.attrs)
            propList.push(props)

            const parser = new Parser(props)

            // const rules = parser.toRules(true).map((i) => i.replace(/^(\..+)\s{/, ':global($1) {'))

            const classNames = parser.getClassNames().join(' ')
            node.attrs['class'] = classNames

            return node
          })

          return tree
        },
      ])

      const html = processor.process(content, {
        sync: true,
        recognizeSelfClosing: true,
      }).html

      const cssFns = propList
        .map((i) => {
          const arg = Object.keys(i)
            .map((i) => `'${i}'`)
            .join(',')
          return `css(${arg})`
        })
        .join(';')

      let code = ''

      const fowerCode = `
          import { setConfig, css } from '@fower/core'
          import { presetWeb } from '@fower/preset-web'

          setConfig(presetWeb)
          ${cssFns}
      `

      if (html.includes('<script>')) {
        code = html.replace('<script>', `<script> \n ${fowerCode}`)
      } else {
        code = html + `<script>\n ${fowerCode} \n</script>`
      }

      return { code }
    },
  }
}

export default fowerSveltePreprocess
