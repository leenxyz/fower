import React from 'react'
import { toFinalProps, Modifiers } from '../styli-core'

export interface HeadingProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    Modifiers {}

export const Heading = (props: HeadingProps) => {
  return <h2 {...toFinalProps(props)} />
}
