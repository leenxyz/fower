import React from 'react'
import { Text as RNText, TextProps as RNTextProp } from 'react-native'
import { toFinalProps, Modifiers } from '../styli-core'

export interface TextProps extends RNTextProp, Modifiers {}

export const Text = (props: TextProps) => {
  return <RNText {...toFinalProps(props)} />
}
