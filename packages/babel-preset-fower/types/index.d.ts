import 'react'
import { AtomicProps, CSSObject } from '@fower/core'

declare module 'react' {
  interface DOMAttributes<T> extends AtomicProps {
    css?: CSSObject
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes extends AtomicProps {
      css?: CSSObject
    }
  }
}
