# Styli

A Atomic CSS in JS library for rapid UI development.

[![npm](https://img.shields.io/npm/v/@styli/core.svg)](https://www.npmjs.com/package/@styli/core)
[![Build Status](https://travis-ci.org/forsigner/styli.svg?branch=master)](https://travis-ci.org/forsigner/styli)
[![Coverage Status](https://coveralls.io/repos/github/forsigner/styli/badge.svg?branch=master)](https://coveralls.io/github/forsigner/styli?branch=master)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/@styli/core.svg)](https://bundlephobia.com/result?p=@styli/core)
[![NPM Downloads](https://img.shields.io/npm/dm/@styli/core.svg?style=flat)](https://www.npmjs.com/package/@styli/core)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Docs

Documentation website: [styli.js.org](https://styli.js.org/).

Frequently viewed docs:

- [Installation](/docs/installation)
- [Getting started](/docs/getting-started)
- [API Reference](/docs/styled)

## Installation

Install styli core package:

```bash
$ npm install @styli/core
```

Install one of framework binding package:

```bash
$ npm install @styli/react
$ npm install @styli/vue
$ npm install @styli/react-native
```

## Example

```jsx
import React from 'react'
import { View, Text, Image } from '@styli/react'

export default () => {
  return (
    <View centerY p-10 w-260 bgWhite rounded-10>
      <Image c-48 src="/img/jobs.jpg" />
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

## License

[MIT License](https://github.com/forsigner/styli/blob/master/LICENSE)
