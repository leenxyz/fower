import React, { forwardRef } from 'react'
import { createStyle, toFinalProps, styled } from '@styli/core'
import { Text, View, Image, Anchor } from '@styli/react'

export const Button = forwardRef((props, ref) => {
  return <button {...toFinalProps(props)} ref={ref} />
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

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
  createStyle,
  styled,
  Text,
  View,
  Image,
  Anchor,
  Button,
}

export default ReactLiveScope
