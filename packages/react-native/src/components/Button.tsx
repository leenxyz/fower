import React from 'react'
import { ImageProps as RNImageProps, Button as RNButton } from 'react-native'
import { toFinalProps, Modifiers } from '../styli-core'

export interface ButtonProps extends RNImageProps, Modifiers {}

export const Button = (props: ButtonProps) => {
  return <RNButton {...toFinalProps(props)} />
}
