import React from 'react'
import { styli } from '@styli/core'
import { ThemeProvider } from '@styli/theming'
import { Color } from './components/Color'
import { Padding } from './components/Padding'
import { Margin } from './components/Margin'
import { Border } from './components/Border'
import { Size } from './components/Size'
import { Background } from './components/Background'
import { FontWeight } from './components/FontWeight'
import { FlexBox } from './components/FlexBox'
import { OutLine } from './components/OutLine'
import { CSSProp } from './components/CSSProp'
import { LayoutEngine } from './components/LayoutEngine'
import { Cursor } from './components/Cursor'
import { Space } from './components/Space'
import { Shadow } from './components/Shadow'
import { BoxDemo } from './components/Box'

// const myClassName = css('p-20 mx-10 borderGray-1 f-40')

// const app = document.getElementById('root')
// app?.className = myClassName

export const App = () => {
  return (
    <div className="box">
      <ThemeProvider theme={styli.getTheme()}>
        <BoxDemo></BoxDemo>
        <Space></Space>
        <Shadow></Shadow>
        <Cursor></Cursor>
        <Background></Background>
        <Color></Color>
        <Padding></Padding>
        <Margin></Margin>
        <Size></Size>
        <FontWeight></FontWeight>
        <Border></Border>
        <FlexBox></FlexBox>
        <OutLine></OutLine>
        <CSSProp></CSSProp>
        <LayoutEngine></LayoutEngine>
      </ThemeProvider>
    </div>
  )
}
