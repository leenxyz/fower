import React from 'react'
import { Text, View, Image, Anchor } from '@styli/react'

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
  Text,
  View,
  Image,
  Anchor,
}

export default ReactLiveScope
