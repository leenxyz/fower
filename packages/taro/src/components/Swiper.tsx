import React from 'react'
import { Swiper as TaroSwiper } from '@tarojs/components'
import { SwiperProps as TaroSwiperProps } from '@tarojs/components/types/Swiper'
import { Modifiers, toFinalProps } from '../styli-core'

export interface SwiperProps extends TaroSwiperProps, Modifiers {}

export const Swiper = (props: SwiperProps) => {
  return <TaroSwiper {...toFinalProps(props)} />
}
