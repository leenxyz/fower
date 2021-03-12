import React from 'react'
import {
  createStyle,
  styled,
  Heading,
  Button,
  Input,
  Text,
  View,
  Anchor,
  Image,
} from '@styli/react'

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
    <View p-20 bgGray10 evenly f-20 centerY {...rest}>
      {children}
    </View>
  )
}

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Wrapper,
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
