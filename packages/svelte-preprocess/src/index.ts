import { PreprocessorGroup } from 'svelte/types/compiler/preprocess'
import posthtml, { NodeAttributes } from 'posthtml'
import { setConfig } from '@fower/core'
import { Parser } from '@fower/parser'
import { presetWeb } from '@fower/preset-web'

setConfig(presetWeb)

const fowerPlacehoder = '__$$Fower_placehover$$__'

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
    if (['class', 'this'].includes(key)) return
    if (/\{|\}/.test(key)) return
    props[key] = value === '' ? true : value
  })

  return props
}

/** TODO: need refactor */
export function fowerSveltePreprocess(): PreprocessorGroup {
  return {
    script: async () => {
      return null as any
    },
    markup: async ({ filename, content }) => {
      let propList: any[] = []

      if (filename.endsWith('@sapper/internal/App.svelte')) return { code: content }

      const processor: any = posthtml([
        (tree) => {
          tree.walk((node) => {
            if (!node?.tag || !node.attrs || !Object.keys(node.attrs).length) return node
            if (['script', 'style'].includes(node.tag)) return node

            const props = getProps(node.attrs)
            propList.push(props)
            const attrs = node.attrs

            const newAttrs: NodeAttributes = {}

            // hack
            Object.entries(attrs).forEach(([key, value]) => {
              if (/^\{.+\}$/ && value === '') {
                newAttrs[key] = fowerPlacehoder
              } else {
                newAttrs[key] = value
              }
            })

            node.attrs = newAttrs

            const parser = new Parser(props)

            // const rules = parser.toRules(true).map((i) => i.replace(/^(\..+)\s{/, ':global($1) {'))

            const classNames = parser.getClassNames().join(' ')
            node.attrs['class'] = classNames

            return node
          })

          return tree
        },
      ])

      let code: string = processor.process(content, {
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

      const fowerCode = `
          import { setConfig, css } from '@fower/core'
          import { presetWeb } from '@fower/preset-web'

          setConfig(presetWeb)
          ${cssFns}
      `

      if (code.includes('<script>')) {
        code = code.replace('<script>', `<script> \n ${fowerCode}\n`)
      } else {
        code = code + `<script>\n ${fowerCode} \n</script>`
      }

      return { code: code.replace(`="${fowerPlacehoder}"`, '') }
    },
  }
}

export default fowerSveltePreprocess
