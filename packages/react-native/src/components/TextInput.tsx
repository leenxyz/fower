import React from 'react'
import { TextInputProps as RNTextInputProps, TextInput as RNTextInput } from 'react-native'
import { toFinalProps, Modifiers } from '../styli-core'

export interface TextInputProps extends RNTextInputProps, Modifiers {}

export const TextInput = (props: TextInputProps) => {
  return <RNTextInput {...toFinalProps(props)} />
}
