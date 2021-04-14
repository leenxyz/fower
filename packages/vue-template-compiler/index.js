const { parseComponent } = require('vue-template-compiler')
const posthtml = require('posthtml')
const { css } = require('@styli/core')
const { Parser } = require('@styli/parser')
const { setConfig } = require('@styli/core')
const { presetWeb } = require('@styli/preset-web')

setConfig(presetWeb)

const isProd = process.env.NODE_ENV === 'production'

function getParser(attrs) {
  const props = {}
  const className = attrs.class || ''

  const classArr = className.split(/\s+/)

  if (className) props.className = className

  classArr.forEach((item) => {
    if (item) props[item] = true
  })

  Object.entries(attrs).forEach((item) => {
    const key = item[0]
    const value = item[1]
    if (key === 'v-css' || key === 'class') return
    props[key] = value === '' ? true : value
  })

  const parser = new Parser(props)
  return parser
}

module.exports = require('vue-template-compiler')

module.exports.parseComponent = (content, opts) => {
  const sfc = parseComponent(content, opts)

  // auto inject styli vue plugin
  const code = `
  import __Vue from 'vue'
  import VueStyli from '@styli/vue'
  __Vue.use(VueStyli)
    `
  if (sfc.script) {
    sfc.script.content = code + sfc.script.content
  }

  if (sfc.template) {
    sfc.template.content = posthtml([
      (tree) => {
        tree.walk((node) => {
          if (node && node.tag) {
            if (!node.attrs) {
              node.attrs = {}
              node.attrs['v-css'] = true
              return node
            }

            node.attrs['v-css'] = true

            if (isProd) return node

            const parser = getParser(node.attrs)
            const rule = parser.toRules(true).join(' ')
            const classNames = parser.getClassNames().join(' ')
            node.attrs['class'] = classNames

            // add style for hot reload
            if (sfc.styles[0]) {
              sfc.styles[0].content = rule + sfc.styles[0].content
            } else {
              sfc.styles.push({
                //hack
                start: 100000,
                attrs: {},
                end: 200000,
                type: 'style',
                content: rule,
              })
            }
          }
          return node
        })

        return tree
      },
    ]).process(sfc.template.content, {
      sync: true,
      recognizeSelfClosing: true,
    }).html
  }

  return sfc
}
