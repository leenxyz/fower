import React, { FC } from 'react'
import { View as RNView, ViewProps as RNViewProps } from 'react-native'
import { toFinalProps, Modifiers } from '@styli/core'

export interface ViewProps extends RNViewProps, Modifiers {}

export const View: FC<ViewProps> = (props) => {
  return <RNView {...toFinalProps(props)} />
}
