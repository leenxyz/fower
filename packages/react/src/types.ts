// import { AtomicProps, As } from '@styli/types'

type EnhancerProps = {
  fooo: string
}

export type PropsOf<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>

/**
 * @template T Object
 * @template K Union of keys (not necessarily present in T)
 */
export type Without<T, K> = Pick<T, Exclude<keyof T, K>>

/**
 * Generic component props with "is" prop
 * @template P Additional props
 * @template T React component or string element
 */
export type BoxOwnProps<E extends React.ElementType = React.ElementType, P = {}> = Without<
  EnhancerProps,
  keyof P
> & {
  /**
   * Replaces the underlying element
   */
  is?: E

  /**
   * Allows the high level value of safeHref to be overwritten on an individual component basis
   */
  allowUnsafeHref?: boolean
}

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
  Without<PropsOf<E>, keyof BoxOwnProps>
