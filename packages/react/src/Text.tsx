import React, { FC } from 'react'
import { toFinalProps, Modifiers } from '@styli/core'

export interface TextProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    Modifiers {}

export const Text: FC<TextProps> = ({ children, ...props }) => {
  const finalProps = toFinalProps(props)
  return <span style={...finalProps}>{children}</span>
}
