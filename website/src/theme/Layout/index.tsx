/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import clsx from 'clsx'
import AnnouncementBar from '@theme/AnnouncementBar'
import Navbar from '@theme/Navbar'
import Footer from '@theme/Footer'
import LayoutProviders from '@theme/LayoutProviders'
import LayoutHead from '@theme/LayoutHead'
import type { Props } from '@theme/Layout'

import preset from '@styli/preset-default'
import { styli } from '@styli/core'
import { styled } from '@styli/styled'
// import { ThemeProvider, useTheme } from '@styli/theming';

styli.configure({ ...preset, inline: false })
import './styles.css'

function Layout(props: Props): JSX.Element {
  const { children, noFooter, wrapperClassName } = props
  return (
    <LayoutProviders>
      <LayoutHead {...props} />

      <AnnouncementBar />
      <Navbar />
      <div className={clsx('main-wrapper', wrapperClassName)}>{children}</div>

      {!noFooter && <Footer />}
    </LayoutProviders>
  )
}

export default Layout
