import { ReactElement } from 'react'
import { AtomicProps, PostfixAtomicProps, FowerCSSProperties } from '@fower/types'

export type StyledComponent<P extends {}> = (props: P) => ReactElement<P, any> | null

export interface InjectedProps {
  children?: any
}

export type Args = Array<
  keyof Omit<AtomicProps, keyof PostfixAtomicProps> | ({} & string) | FowerCSSProperties
>
