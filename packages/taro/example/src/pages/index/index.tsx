import React, { Component } from 'react'
import { configColors } from '@styli/core'
import { View, Text } from './taro'

import './index.css'

configColors({
  black: '#9090',
})

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index" s-200 center column borderGray700-4>
        <Text bgBlue500>Hello!</Text>
        <Text bgGreen500>world!</Text>
      </View>
    )
  }
}
