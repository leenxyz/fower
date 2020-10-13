import React from 'react'
import { toFinalProps, Modifiers } from '../styli-core'

export interface AnchorProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    Modifiers {}

export const Anchor = (props: AnchorProps) => {
  return <a {...toFinalProps(props)} />
}
