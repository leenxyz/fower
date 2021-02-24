import React, { FC } from 'react'
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
import { styli, ThemeProvider, Box } from '@styli/react'
import { styled } from '@styli/styled'

styli.configure(() => ({
  dev: process.env.NODE_ENV === 'development',
}))

interface TestProps {
  center?: string
  className?: string
  style?: any
}

const Test: FC<TestProps> = (props) => {
  const { center, style, className } = props
  return (
    <div style={style} className={className}>
      {center}
    </div>
  )
}

const StyliTest = styled(Test)

export const App = () => {
  return (
    <div className="box">
      {/* @ts-ignore */}
      <StyliTest styliIgnore={['center']} center="11111" />

      <StyliTest styliIgnore={['center']} />

      <StyliTest />

      <Box center s-200>
        <Box flex order teal--hover={false}>
          哈哈
        </Box>
        <Box space3>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Box>
      </Box>
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
