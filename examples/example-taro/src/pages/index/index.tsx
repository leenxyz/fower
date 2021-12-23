import { Component } from 'react'
import { View } from '@tarojs/components'
import { Text, Switch } from '@fower/taro'
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
        <Text red300>Hello world!</Text>
        <Switch color="#000" excludedProps={['color']} />
      </View>
    )
  }
}
