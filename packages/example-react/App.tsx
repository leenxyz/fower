import React from 'react'
import { styli, createStyle } from '@styli/core'
import presetDefault from '@styli/preset-default'
import { ThemeProvider } from '@styli/theming'
import { Color } from './components/Color'
import { Padding } from './components/Padding'
import { Margin } from './components/Margin'
import { Border } from './components/Border'
import { Size } from './components/Size'
import { BgColor } from './components/BgColor'
import { FontWeight } from './components/FontWeight'
import { FlexBox } from './components/FlexBox'
import { OutLine } from './components/OutLine'
import { CSSProp } from './components/CSSProp'
import { LayoutEngine } from './components/LayoutEngine'
import { Cursor } from './components/Cursor'

// const myClassName = css('p-20 mx-10 borderGray-1 f-40')

// const app = document.getElementById('root')
// app?.className = myClassName

export const App = () => {
  return (
    <div className="box">
      <ThemeProvider theme={styli.getTheme()}>
        <Cursor></Cursor>
        <BgColor></BgColor>
        <Color></Color>
        <Padding></Padding>
        <Margin></Margin>
        <Size></Size>
        <FontWeight></FontWeight>
        <Border></Border>
        <FlexBox></FlexBox>
        <OutLine></OutLine>
        <LayoutEngine></LayoutEngine>
        <CSSProp></CSSProp>
      </ThemeProvider>
    </div>
  )
}
