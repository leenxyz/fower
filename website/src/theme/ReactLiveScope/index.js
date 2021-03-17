import React, { forwardRef } from 'react'
import { createStyle } from '@styli/core'
import { styled } from '@styli/styled'
import { Text, View, Image, Anchor, Box } from '@styli/react'

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
    <View p-20 bgGray10 toEvenly f-20 toCenterY {...rest}>
      {children}
    </View>
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
  View,
  Image,
  Box,
  Heading,
  Anchor,
  Wrapper
}

export default ReactLiveScope
