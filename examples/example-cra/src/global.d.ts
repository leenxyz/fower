import { AtomicProps } from '@fower/atomic-props'

declare module 'react' {
  interface HTMLAttributes<T> extends AtomicProps {}
}
