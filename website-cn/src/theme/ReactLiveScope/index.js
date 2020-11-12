import React, { forwardRef } from 'react'
import { createStyle } from '@styli/core'
import { styled } from '@styli/styled'
import { Text, View, Image, Anchor } from '@styli/react'

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
  Heading,
  Anchor,
}

export default ReactLiveScope
