import React from 'react'
import {
  TouchableWithoutFeedback as RNTouchableHighlight,
  TouchableWithoutFeedbackProps as RNTouchableHighlightProps,
} from 'react-native'
import { toFinalProps, Modifiers } from '../styli-core'

export interface TouchableHighlightProps extends RNTouchableHighlightProps, Modifiers {}

export const TouchableHighlight = (props: TouchableHighlightProps) => {
  return <RNTouchableHighlight {...toFinalProps(props)} />
}
