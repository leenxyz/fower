import React, { FC } from 'react'
import { ScrollView as RNScrollView, ScrollViewProps as RNScrollViewProps } from 'react-native'
import { toFinalProps, Modifiers } from '@styli/core'

export interface ScrollViewProps extends RNScrollViewProps, Modifiers {}

export const ScrollView: FC<ScrollViewProps> = ({ children, ...props }) => {
  const finalProps = toFinalProps(props)
  return <RNScrollView {...finalProps}>{children}</RNScrollView>
}
