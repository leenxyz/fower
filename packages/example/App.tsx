import React from 'react'
import { styli } from '@styli/core'
import presetDefault from '@styli/preset-default'
import { ThemeDemo } from './components/ThemeDemo'
import { styled } from '@styli/styled'
import { ThemeProvider } from '@styli/theming'
import { Color } from './components/Color'
import { Padding } from './components/Padding'

styli.setup({
  ...presetDefault,
  inline: false,
})

// const myClassName = css('p-20 mx-10 borderGray-1 f-40')

// const app = document.getElementById('root')
// app?.className = myClassName

export const View = styled('div')
export const Text = styled('span')

export const App = () => {
  return (
    <div className="box">
      <Color></Color>
      <Padding></Padding>
      <ThemeProvider
        theme={
          {
            colors: {
              red: 'red',
              black: '#999',
            } as any,
          } as any
        }
      >
        <ThemeDemo></ThemeDemo>
      </ThemeProvider>
      <View p-20 f-50 f-80--hover={false} border p-30--after={false}>
        <View>1</View>
        <View>2</View>
      </View>
      <View border p-20 p-40--hover h4 p4>
        Core
      </View>
    </div>
  )
}
