import React from 'react'
import { ImageProps as RNImageProps, Image as RNImage } from 'react-native'
import { toFinalProps, Modifiers } from '../styli-core'

export interface ImageProps extends RNImageProps, Modifiers {}

export const Image = (props: ImageProps) => {
  return <RNImage {...toFinalProps(props)} />
}
