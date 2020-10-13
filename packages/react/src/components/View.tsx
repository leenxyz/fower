import React from 'react'
import { toFinalProps, Modifiers } from '../styli-core'

export interface ViewProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Modifiers {}

export const View = (props: ViewProps) => {
  return <div {...toFinalProps(props)} />
}
