import React, { Component } from 'react'
import { View, Text, styli } from '@styli/taro'
import './index.scss'

/**
 * 自定义插件、注册指令
 */
styli.use({
  name: 'styli-plugin-transform',
  isMatch(key) {
    return key === 'transform'
  },
  onAtomStyleCreate(atom) {
    const { propValue } = atom
    atom.style = { transform: propValue as any }
    return atom
  }
})

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index' transform="revert" center>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
