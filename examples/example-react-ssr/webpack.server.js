const path = require('path')
// const merge = require('webpack-merge')
// const config = require('./webpack.base')
const nodeExternals = require('webpack-node-externals')

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './server/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['last 2 versions'],
                },
              },
            ],
          ],
        },
      },
    ],
  },
}

// module.exports = merge(config, serverConfig)
module.exports = serverConfig
