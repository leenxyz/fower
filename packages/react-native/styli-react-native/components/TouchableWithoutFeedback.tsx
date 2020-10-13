import React from 'react'
import {
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
} from 'react-native'
import { toFinalProps, Modifiers } from '@styli/core'

export interface TouchableWithoutFeedbackProps extends RNTouchableWithoutFeedbackProps, Modifiers {}

export const TouchableWithoutFeedback = (props: TouchableWithoutFeedbackProps) => {
  return <RNTouchableWithoutFeedback {...toFinalProps(props)} />
}
