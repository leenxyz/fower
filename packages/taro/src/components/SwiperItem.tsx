import React from 'react'
import { SwiperItem as TaroSwiperItem } from '@tarojs/components'
import { SwiperItemProps as TaroSwiperItemProps } from '@tarojs/components/types/SwiperItem'
import { Modifiers, toFinalProps } from '../styli-core'

export interface SwiperItemProps extends TaroSwiperItemProps, Modifiers {}

export const SwiperItem = (props: SwiperItemProps) => {
  return <TaroSwiperItem {...toFinalProps(props)} />
}
