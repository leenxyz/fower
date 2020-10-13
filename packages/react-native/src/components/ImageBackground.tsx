import React from 'react'
import {
  ImageBackgroundProps as RNImageBackgroundProps,
  ImageBackground as RNImageBackground,
} from 'react-native'
import { toFinalProps, Modifiers } from '../styli-core'

export interface ImageBackgroundProps extends RNImageBackgroundProps, Modifiers {}

export const ImageBackground = (props: ImageBackgroundProps) => {
  return <RNImageBackground {...toFinalProps(props)} />
}
