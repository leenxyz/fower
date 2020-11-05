import * as React from 'react'
import { styled, useTheme } from '@styli/core'

export const View = styled('div')
export const Text = styled('span')

export const ThemeDemo = () => {
  // const theme = useTheme()
  // console.log('-----------theme:', theme)
  return <View>Theme Demo!!</View>
}
