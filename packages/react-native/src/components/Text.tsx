import React, { FC } from 'react'
import { Text as RNText, TextProps as RNTextProp } from 'react-native'
import { toFinalProps, Modifiers } from '../styli-core'

export interface TextProps extends RNTextProp, Modifiers {}

export const Text: FC<TextProps> = (props) => {
  return <RNText {...toFinalProps(props)} />
}
