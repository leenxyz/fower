/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import usePrismTheme from '@theme/hooks/usePrismTheme'
import { Box, Text } from '@fower/react'
import styles from './styles.module.css'

function Header({ translateId, description, text }) {
  return (
    <div className={clsx(styles.playgroundHeader)}>
      <Translate id={translateId} description={description}>
        {text}
      </Translate>
    </div>
  )
}

function ResultWithHeader() {
  return (
    <>
      <div className={styles.playgroundPreview}>
        <LivePreview />
        <LiveError />
      </div>
    </>
  )
}

function EditorWithHeader() {
  return (
    <Box relative>
      <LiveEditor className={styles.playgroundEditor} />
      <Text textSM fontBold green400 absolute top-2 right-10>
        LIVE DEMO
      </Text>
    </Box>
  )
}

export default function Playground({ children, transformCode, ...props }) {
  const {
    isClient,
    siteConfig: {
      themeConfig: {
        liveCodeBlock: { playgroundPosition },
      },
    },
  } = useDocusaurusContext()
  const prismTheme = usePrismTheme()
  const code = isClient ? children.replace(/\n$/, '') : ''

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        key={isClient}
        code={code}
        transformCode={transformCode || ((code) => `${code};`)}
        theme={prismTheme}
        {...props}
      >
        {playgroundPosition === 'top' ? (
          <>
            <ResultWithHeader />
            <EditorWithHeader code={code} />
          </>
        ) : (
          <>
            <EditorWithHeader />
            <ResultWithHeader />
          </>
        )}
      </LiveProvider>
    </div>
  )
}
