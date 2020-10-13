import React from 'react'
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native'
import { toFinalProps, Modifiers } from '@styli/core'

export interface TouchableOpacityProps extends RNTouchableOpacityProps, Modifiers {}

export const Opacity = (props: RNTouchableOpacityProps) => {
  return <RNTouchableOpacity {...toFinalProps(props)} />
}
