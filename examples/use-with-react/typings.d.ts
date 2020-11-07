import { AtomicProps } from '@styli/styled';

declare module 'react' {
  interface HTMLAttributes<T> extends AtomicProps {}
}
