import * as React from 'react'
import { styli, styled, ThemeProvider } from '@styli/core'
import presetDefault from '@styli/preset-default'
import { ThemeDemo } from './ThemeDemo'

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
      <ThemeProvider
        theme={{
          colors: {
            red: 'red',
            black: '#999',
          },
        }}
      >
        <ThemeDemo></ThemeDemo>
      </ThemeProvider>
      {/* <View lhLoose f-20 bgRed20 display="block">
        <View s-400>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </View>
      </View> */}
      <View p-20 f-50 f-80--hover inlineBlock border p-30--after>
        <View>1</View>
        <View>2</View>
      </View>
      <View border p-20 p-40--hover h4 p4>
        Core
      </View>
    </div>
  )
}
