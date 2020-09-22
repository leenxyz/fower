import React, { FC } from 'react'
import { TouchableHighlight, TouchableHighlightProps } from 'react-native'
import { toFinalProps, Modifiers } from '@styli/core'

export interface OpacityProps extends TouchableHighlightProps, Modifiers {}

export const Highlight: FC<OpacityProps> = ({ children, ...props }) => {
  const finalProps = toFinalProps(props)
  return <TouchableHighlight {...finalProps}>{children}</TouchableHighlight>
}
