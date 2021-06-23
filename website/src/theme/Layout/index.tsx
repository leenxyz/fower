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
import { Helmet } from 'react-helmet'
import { Box } from '@fower/react'

import type { Props } from '@theme/Layout'

import './styles.css'

function Layout(props: Props): JSX.Element {
  const { children, noFooter, wrapperClassName } = props
  return (
    <LayoutProviders>
      <LayoutHead {...props} />

      <Helmet>
        <script>
          {`
        var _hmt = _hmt || []
        ;(function () {
          var hm = document.createElement('script')
          hm.src = "https://hm.baidu.com/hm.js?ad5205df993dc46e352a6c13c9dbb254";
          var s = document.getElementsByTagName('script')[0]
          s.parentNode.insertBefore(hm, s)
        })()
      `}
        </script>
      </Helmet>

      <AnnouncementBar />
      <Navbar />
      <Box
        w-1360--md
        className={clsx('main-wrapper', wrapperClassName)}
        style={{
          // maxWidth: '1360px',
          // width: '1360px',
          margin: '0 auto',
        }}
      >
        {children}
      </Box>

      {!noFooter && <Footer />}
    </LayoutProviders>
  )
}

export default Layout
