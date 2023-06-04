import React, { forwardRef } from 'react'
import { createStyle, setTheme, keyframes, injectGlobalStyle, setConfig } from '@fower/react'
import { addAtom, composeAtom } from '@fower/react'
import { styled } from '@fower/react'
import { Box, useMode } from '@fower/react'

const Heading = styled('h2', { lineHeight: '1em' })
const Button = styled(
  'button',
  'bgBrand500',
  'rounded',
  'outlineNone',
  'white',
  'px8',
  'py3',
  'cursorPointer',
  'fontBold',
)
const Input = styled('input', 'border', 'rounded', 'px4', 'py2')

injectGlobalStyle({
  '.title': {
    fontWeight: 800,
    fontSize: '20px',
    color: 'hotpink',
  },
})

addAtom('textHeading', {
  fontSize: 28,
  fontWeight: 600,
  lineHeight: 1.5,
})

composeAtom('formInput', {
  'border-2': true,
  borderGray200: true,
  'borderOrange400--focus': true,
  rounded: true,
  outlineNone: true,
  px4: true,
  py2: true,
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

setConfig({
  mode: {
    supportedMode: [
      'red', // red mode
      'blue', // red mode
      'large', // large text mode
    ],
  },
})

setTheme({
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
    '4xl': '0 32px 64px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0,0,0,0.02)',
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

// 兼容 taro、remax demo报错
const View = styled('div')
const Image = styled('img')
const Text = styled('span')

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  injectGlobalStyle,
  useMode,
  ButtonExample,
  Button,
  Input,
  createStyle,
  keyframes,
  styled,
  Box,
  Heading,
  Wrapper,
  View,
  Image,
  Text,
}

export default ReactLiveScope
