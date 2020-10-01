import React, { FC } from 'react'
import { toFinalProps, Modifiers } from '@styli/core'

export interface HeadingProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
  Modifiers { }

export const H1: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h1')
  return <h1 style={...finalProps}>{children}</h1>
}

export const H2: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h2')
  return <h2 style={...finalProps}>{children}</h2>
}

export const H3: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h3')
  return <h3 style={...finalProps}>{children}</h3>
}

export const H4: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h4')
  return <h4 style={...finalProps}>{children}</h4>
}

export const H5: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h5')
  return <h5 style={...finalProps}>{children}</h5>
}

export const H6: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h6')
  return <h6 style={...finalProps}>{children}</h6>
}

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
}