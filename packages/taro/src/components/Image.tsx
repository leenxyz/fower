import React from 'react'
import { Image as TaroImage } from '@tarojs/components'
import { ImageProps as TaroImageProps } from '@tarojs/components/types/Image'
import { Modifiers, toFinalProps } from '../styli-core'

export interface ImageProps extends TaroImageProps, Modifiers {}

export const Image = (props: ImageProps) => {
  return <TaroImage {...toFinalProps(props)} />
}
