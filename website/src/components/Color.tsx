import React from 'react'
import { View } from '@styli/react'

export default ({ color = '' }) => {
  return <View h-20 w-40 bg={color}></View>
}
