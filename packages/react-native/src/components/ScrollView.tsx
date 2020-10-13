import React from 'react'
import { ScrollView as RNScrollView, ScrollViewProps as RNScrollViewProps } from 'react-native'

import { toFinalProps, Modifiers } from '../styli-core'

export interface ScrollViewProps extends RNScrollViewProps, Modifiers {}

export const ScrollView = (props: ScrollViewProps) => {
  return <RNScrollView {...toFinalProps(props)} />
}
