/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import clsx from 'clsx'
import { View, Text } from '@styli/react'

import styles from './styles.module.css'

function Playground({ children, theme, transformCode, ...props }) {
  return (
    <LiveProvider
      code={children.replace(/\n$/, '')}
      transformCode={transformCode || ((code) => `${code};`)}
      theme={theme}
      {...props}
    >
      <div className={styles.playgroundPreview}>
        <LivePreview />
        <LiveError />
      </div>
      <View relative>
        <LiveEditor className={styles.playgroundEditor} />
        <Text f-14 fontBold green40 absolute T-2 R-10>
          LIVE DEMO
        </Text>
      </View>
    </LiveProvider>
  )
}

export default Playground
