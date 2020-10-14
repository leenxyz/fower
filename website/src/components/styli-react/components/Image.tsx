import React from 'react'
import { toFinalProps, Modifiers } from '../styli-core'

export interface ImageProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    Modifiers {}

export const Image = (props: ImageProps) => {
  return <img {...toFinalProps(props)} />
}
