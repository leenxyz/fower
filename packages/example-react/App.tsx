import React from 'react'
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
import { styli, ThemeProvider, View } from '@styli/react'

styli.configure(() => ({
  dev: process.env.NODE_ENV === 'development',
}))

export const App = () => {
  return (
    <div className="box">
      {/* <Test /> */}
      <View center s-200>
        <View flex order>
          哈哈
        </View>
      </View>
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
