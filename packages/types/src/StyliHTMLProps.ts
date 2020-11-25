import { AtomicProps } from './AtomicProps'

export type As = React.ElementType

// props from a React element or component
export type ComponentProps<T extends As> = React.ComponentProps<T> & {
  as?: As
}

export declare type StyliHTMLProps<T extends As> = ComponentProps<T> & AtomicProps & { as?: As }
