import React from 'react'
import { toFinalProps, Modifiers } from '../styli-core'

export interface TextProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    Modifiers {}

export const Text = (props: TextProps) => {
  return <span {...toFinalProps(props)} />
}
