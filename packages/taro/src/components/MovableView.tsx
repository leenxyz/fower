import React from 'react'
import { MovableView as TaroMovableView } from '@tarojs/components'
import { MovableViewProps as TaroMovableViewProps } from '@tarojs/components/types/MovableView'
import { Modifiers, toFinalProps } from '../styli-core'

export interface MovableViewProps extends TaroMovableViewProps, Modifiers {}

export const MovableView = (props: MovableViewProps) => {
  return <TaroMovableView {...toFinalProps(props)} />
}
