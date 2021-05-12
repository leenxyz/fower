import { Component } from 'react'
import { View, Text } from '@fower/taro'
import './index.css'

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View h-100 border bgGreen200 text-16>
          Hello world!
        </View>
        <View h-100px border bgRed200 text-16px>
          Hello world!
        </View>
      </View>
    )
  }
}
