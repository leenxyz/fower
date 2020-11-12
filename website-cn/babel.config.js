module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
    // require.resolve('@styli/babel-preset-styli'),
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}
