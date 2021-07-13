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
        <View h28 border bgGreen200 text-32>
          Hello world!
        </View>
        <View h20 border bgRed200 text-16px>
          Hello world!
        </View>
      </View>
    )
  }
}
