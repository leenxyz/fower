import React, { forwardRef } from 'react'
import { createStyle } from '@styli/core'
import { styled } from '@styli/styled'
import { Text, View, Box, Image } from '@styli/react'

const Heading = styled('h2', { lineHeight: '1em' })
const Button = styled('button')
const Input = styled('input')

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
  styled,
  Text,
  Box,
  View,
  Image,
  Heading,
  Wrapper,
}

export default ReactLiveScope
