import React, { FC } from 'react'
import { ImageProps as RNImageProps, Image as RNImage } from 'react-native'
import { toFinalProps, Modifiers } from '@styli/core'

export interface ImageProps extends RNImageProps, Modifiers {}

export const Image: FC<ImageProps> = ({ children, ...props }) => {
  const finalProps = toFinalProps(props)
  return <RNImage {...finalProps}>{children}</RNImage>
}
