import React, { FC } from 'react'
import { toFinalProps, Modifiers } from '../styli-core'

export interface ViewProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Modifiers {}

export const View: FC<ViewProps> = (props) => {
  return <div {...toFinalProps(props)} />
}
