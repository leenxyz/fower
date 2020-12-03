import { CSSProperties, ReactElement } from 'react'

export type StyledComponent<P extends {}> = (props: P) => ReactElement<P, any> | null

export interface InjectedProps {
  children?: any
}

export type Args = (string | CSSProperties)[]
