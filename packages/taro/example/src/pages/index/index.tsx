import React, { Component } from 'react'
import { configColors, Styli } from '@styli/core'
import { View, Text } from './taro'

import './index.css'

Styli.config({
  covertConfig: [
    {
      key: 'disabledStyle',
      style: {
        color: 'gray'
      },
    },
    {
      key: (prop) => {
        return /test-\d+/.test(prop)
      },
      style: (prop) => {
        const [, value] = prop.match(/test-(\d+)/)
        return { fontSize: value + 'px', color: 'red' }
      },
    }]
})

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
        <Text bgBlue500 disabledStyle text-16>Hello!</Text>
        <Text bgGreen500>world!</Text>
      </View>
    )
  }
}
