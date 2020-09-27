import React, { FC } from 'react'
import { toFinalProps, Modifiers } from '@styli/core'

export interface ImageProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    Modifiers {}

export const Image: FC<ImageProps> = ({ children, ...props }) => {
  const finalProps = toFinalProps(props)
  return <img style={...finalProps}>{children}</img>
}
