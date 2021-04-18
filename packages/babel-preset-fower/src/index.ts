const jsx = require('@babel/plugin-transform-react-jsx')
const pragmatic = require('babel-plugin-jsx-pragmatic')

const pragmaName = '__FowerJSX'

export default () => {
  return {
    plugins: [
      [
        pragmatic,
        {
          export: 'jsx',
          module: '@fower/react',
          import: pragmaName,
        },
      ],
      [jsx, { pragma: pragmaName, pragmaFrag: 'React.Fragment' }],
    ],
  }
}
