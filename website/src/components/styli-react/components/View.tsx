import React, { forwardRef } from 'react'
import { toFinalProps, Modifiers } from '../styli-core'

export interface ViewProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Modifiers {}

export const View = forwardRef((props: ViewProps, ref) => {
  return <div {...toFinalProps(props)} ref={ref} />
})
