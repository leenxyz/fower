const jsx = require('@babel/plugin-transform-react-jsx')
const pragmatic = require('babel-plugin-jsx-pragmatic')

const pragmaName = '__StyliJSX'

export default () => {
  return {
    plugins: [
      [
        pragmatic,
        {
          export: 'jsx',
          module: '@styli/react',
          import: pragmaName,
        },
      ],
      [jsx, { pragma: pragmaName, pragmaFrag: 'React.Fragment' }],
    ],
  }
}
