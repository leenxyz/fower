import 'react'
import { Modifiers } from '@styli/core'

declare module 'react' {
  interface DOMAttributes<T> extends Modifiers {
    css?: any
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes extends Modifiers {
      css?: any
    }
  }
}
