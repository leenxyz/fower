import { AtomicProps } from '@fower/types'

declare module 'react' {
  interface HTMLAttributes<T> extends AtomicProps {}
}
