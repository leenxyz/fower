import React from 'react'
import { ScrollView as TaroScrollView } from '@tarojs/components'
import { ScrollViewProps as TaroScrollViewProps } from '@tarojs/components/types/ScrollView'
import { Modifiers, toFinalProps } from '../styli-core'

export interface ScrollViewProps extends TaroScrollViewProps, Modifiers {}

export const ScrollView = (props: ScrollViewProps) => {
  return <TaroScrollView {...toFinalProps(props)} />
}
