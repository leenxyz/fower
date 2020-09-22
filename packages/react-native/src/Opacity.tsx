
import React, { FC } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { toFinalProps, Modifiers } from '@styli/core'

export interface OpacityProps extends TouchableOpacityProps, Modifiers {}

export const Opacity: FC<OpacityProps> = ({ children, ...props }) => {
  const finalProps = toFinalProps(props)
  return <TouchableOpacity {...finalProps}>{children}</TouchableOpacity>
}
