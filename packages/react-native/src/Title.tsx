import React, { FC } from 'react'
import { toFinalProps, Modifiers } from '@styli/core'
import { Text as RNText, TextProps as RNTextProp } from 'react-native'

export interface HeadingProps extends RNTextProp, Modifiers {}

export const H1: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props)
  return <RNText {...finalProps}>{children}</RNText>
}

export const H2: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props)
  return <RNText {...finalProps}>{children}</RNText>
}

export const H3: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props)
  return <RNText {...finalProps}>{children}</RNText>
}

export const H4: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props)
  return <h4 {...finalProps}>{children}</h4>
}

export const H5: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props)
  return <h5 {...finalProps}>{children}</h5>
}

export const H6: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props)
  return <h6 {...finalProps}>{children}</h6>
}

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}
