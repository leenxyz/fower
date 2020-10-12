import React, { FC } from 'react'
import { Modifiers, toFinalProps } from '@styli/core'

export interface ImageProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    Modifiers {}

export const Image: FC<ImageProps> = ({ children, ...props }) => {
  const finalProps = toFinalProps(props)
  return <img {...finalProps}>{children}</img>
}
