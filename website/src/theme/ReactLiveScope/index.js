import React, { forwardRef } from 'react'
import { createStyle, setTheme, keyframes } from '@fower/core'
import { styled } from '@fower/styled'
import { Text, View, Box, Image } from '@fower/react'

const Heading = styled('h2', { lineHeight: '1em' })
const Button = styled('button', 'bgBrand', 'rounded', 'outlineNone', 'white', 'px8', 'py3', 'cursorPointer', 'fontBold')
const Input = styled('input', 'border', 'rounded', 'px4', 'py2')

import { addAtom } from '@fower/core'

addAtom('textHeading', {
  fontSize: 28,
  fontWeight: 600,
  lineHeight: 1.5,
})

addAtom(/heading(sm|md|lg)/i, (atom) => {
  const size = atom.propKey.replace('heading', '').toLowerCase()
  switch (size) {
    case 'sm':
      atom.style = { fontSize: 16 }
      break
    case 'md':
      atom.style = { fontSize: 24 }
      break
    case 'lg':
      atom.style = { fontSize: 32 }
      break
    default:
      break
  }
  return atom
})

setTheme({
  modes: [
    'red', // red mode
    'blue', // red mode
    'large', // large text mode
  ],
  spacings: {
    100: 400,
  },
  breakpoints: {
    '3xl': '1600px',
  },
  radii: {
    '4xl': 28,
  },
  fontSizes: {
    body: 14,
  },
  shadows: {
    '3xl': '0 32px 64px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0,0,0,0.02)',
  },
  colors: {
    brandLight: '#e0f2fe',
    brandLighter: '#bae6fd',
    brandLightest: '#7dd3fc',
    brandPrimary: '#38bdf8',
    brandDark: '#0ea5e9',
    brandDarker: '#0284c7',
    brandDarkest: '#0369a1',
  },
})

const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: 'white',
      border: 'solid red',
      borderRadius: 20,
      padding: 10,
      cursor: 'pointer',
      ...props.style,
    }}
  />
)

const Wrapper = (props) => {
  const { children, ...rest } = props
  return (
    <Box p-20 bgGray10 toEvenly textXL toCenterY {...rest}>
      {children}
    </Box>
  )
}

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
  Button,
  Input,
  createStyle,
  keyframes,
  styled,
  Text,
  Box,
  View,
  Image,
  Heading,
  Wrapper,
}

export default ReactLiveScope
