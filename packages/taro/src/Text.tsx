import React, { FC } from 'react'
import { Text as TaroText } from '@tarojs/components'
import { TextProps as TaroTextProp } from '@tarojs/components/types/Text'
import { Modifiers, toFinalProps } from '@styli/core'

export interface TextProps extends TaroTextProp, Modifiers {}

export const Text: FC<TextProps> = ({ children, ...props }) => {
  const finalProps = toFinalProps(props)
  return <TaroText {...finalProps}>{children}</TaroText>
}
