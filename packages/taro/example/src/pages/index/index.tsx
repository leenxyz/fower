import React, { Component } from 'react'
import { View, Text } from './taro'

import './index.css'

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index" s-200 center column borderGray700-4>
        <Text bgBlue500 f-16>
          Hello!
        </Text>
        <Text bgGreen500>world!</Text>
      </View>
    )
  }
}
