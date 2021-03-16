# Styli

Styli 是一款快速构建 UI 的原子类 JS 库。

[![npm](https://img.shields.io/npm/v/@styli/core.svg)](https://www.npmjs.com/package/@styli/core)
[![Build Status](https://travis-ci.org/forsigner/styli.svg?branch=master)](https://travis-ci.org/forsigner/styli)
[![Coverage Status](https://coveralls.io/repos/github/forsigner/styli/badge.svg?branch=master)](https://coveralls.io/github/forsigner/styli?branch=master)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/@styli/core.svg)](https://bundlephobia.com/result?p=@styli/core)
[![NPM Downloads](https://img.shields.io/npm/dm/@styli/core.svg?style=flat)](https://www.npmjs.com/package/@styli/core)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## 使用

### 安装

Styli 完美支持 React Like 框架。您可以在 React，Preact，TaroReact，ReactNative 等框架中使用。同时我们也将部分 Styli 能力赋予到 Vue，原生 HTML 上。

```bash
npm i @styli/react --save
```

其他平台包请查看我们的[官方文档](https://styli.js.org/)

### 示例

```tsx
import { View } from '@styli/react'

export function UserCard() {
  return (
    <View toCenterY p-10 w-260 rounded-10 shadow bgWhite>
      <Image circle-48 src="/img/jobs.jpg" />
      <View ml-10>
        <View f-20 fontBold>
          Steve Jobs
        </View>
        <Text gray800>Co-founder of Apple Inc.</Text>
      </View>
    </View>
  )
}
```

## 文档

官方文档[styli.js.org](https://styli.js.org/).

> - [简介](https://styli.js.org/docs/introduction)
> - [安装](https://styli.js.org/docs/use-with-react)
> - [起步](https://styli.js.org/docs/basic)
> - [API](https://styli.js.org/docs/styled)

## 开发

- [Contributing Guide](/CONTRIBUTING.md)

## License

[MIT License](https://github.com/forsigner/styli/blob/master/LICENSE)
