import React, { FC } from 'react'
import { toFinalProps, Modifiers } from '@styli/core'
import { View as TaroView } from '@tarojs/components'
import { ViewProps as TaroViewProps } from '@tarojs/components/types/View'

export interface HeadingProps extends TaroViewProps, Modifiers { }

export const H1: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h1')
  return <TaroView {...finalProps}>{children}</TaroView>
}

export const H2: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h2')
  return <TaroView {...finalProps}>{children}</TaroView>
}

export const H3: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h3')
  return <TaroView {...finalProps}>{children}</TaroView>
}

export const H4: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h4')
  return <h4 {...finalProps}>{children}</h4>
}

export const H5: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h5')
  return <h5 {...finalProps}>{children}</h5>
}

export const H6: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps(props, 'h6')
  return <h6 {...finalProps}>{children}</h6>
}

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
}