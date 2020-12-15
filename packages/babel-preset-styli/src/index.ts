import { styliBabelPlugin, Config } from './babelPlugin'
const jsx = require('@babel/plugin-transform-react-jsx')
const pragmatic = require('babel-plugin-jsx-pragmatic')

const pragmaName = '__StyliJSX'

interface PresetConfig extends Config {
  enhance?: boolean
}

export default (__: any, opt?: PresetConfig) => {
  const { enhance = false, ...rest } = opt || {}

  const plugins = [
    [
      pragmatic,
      {
        export: 'jsx',
        module: '@styli/react',
        import: pragmaName,
      },
    ],
    [jsx, { pragma: pragmaName, pragmaFrag: 'React.Fragment' }],
  ]

  if (enhance) {
    plugins.unshift([styliBabelPlugin, rest])
  }

  return { plugins }
}
