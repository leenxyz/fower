import { AtomicProps } from '@styli/types';

declare module 'react' {
  interface HTMLAttributes<T> extends AtomicProps { }
}
