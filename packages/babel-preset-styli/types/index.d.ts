import 'react'
import { AtomicProps } from '@styli/types'

declare module 'react' {
  interface DOMAttributes<T> extends AtomicProps {
    css?: any
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes extends AtomicProps {
      css?: any
    }
  }
}
