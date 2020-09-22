import React, { FC } from 'react'
import { View as TaroView } from '@tarojs/components'
import { ViewProps as TaroViewProps } from '@tarojs/components/types/View'
import { Modifiers, toFinalProps } from '@styli/core'

export interface ViewProps extends TaroViewProps, Modifiers {}

export const View: FC<ViewProps> = ({ children, ...props }) => {
  const finalProps = toFinalProps(props)
  return <TaroView {...finalProps}>{children}</TaroView>
}
