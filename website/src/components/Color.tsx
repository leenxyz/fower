import React from 'react'
import { View } from '@styli/react'

export const ColorBlock = ({ color = '' }) => {
  return <View h-20 w-40 bg={color}></View>
}
