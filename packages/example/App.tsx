import React from 'react'
import { styli } from '@styli/core'
import presetDefault from '@styli/preset-default'
import { ThemeProvider } from '@styli/theming'
import { Color } from './components/Color'
import { Padding } from './components/Padding'
import { Margin } from './components/Margin'
import { Border } from './components/Border'

styli.setup({
  ...presetDefault,
  inline: false,
})

// const myClassName = css('p-20 mx-10 borderGray-1 f-40')

// const app = document.getElementById('root')
// app?.className = myClassName

export const App = () => {
  return (
    <div className="box">
      <ThemeProvider theme={styli.config.theme}>
        <Color></Color>
        <Padding></Padding>
        <Margin></Margin>
        <Border></Border>
      </ThemeProvider>
    </div>
  )
}
