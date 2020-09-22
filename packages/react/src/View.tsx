import React, { FC, HTMLAttributes } from 'react'
import { toFinalProps, Modifiers } from '@styli/core'

export interface ViewProps extends HTMLAttributes<HTMLDivElement>, Modifiers {}

export const View: FC<ViewProps> = ({ children, ...props }) => {
  const finalProps = toFinalProps(props)
  return <div {...finalProps}>{children}</div>
}
