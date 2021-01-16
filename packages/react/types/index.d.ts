/// <reference types="@styli/preset-default" />
/// <reference types="react" />
import React, { PropsWithChildren, ComponentProps } from 'react'
import { AtomicProps, As } from '@styli/types'

export declare const View: import('@styli/styled/dist/types').StyledComponent<
  import('react').ClassAttributes<HTMLDivElement> &
    import('react').HTMLAttributes<HTMLDivElement> &
    import('@styli/types').AtomicProps &
    import('@styli/styled/dist/types').InjectedProps
>
export declare const Text: import('@styli/styled/dist/types').StyledComponent<
  import('react').ClassAttributes<HTMLSpanElement> &
    import('react').HTMLAttributes<HTMLSpanElement> &
    import('@styli/types').AtomicProps &
    import('@styli/styled/dist/types').InjectedProps
>
export declare const Button: import('@styli/styled/dist/types').StyledComponent<
  import('react').ClassAttributes<HTMLButtonElement> &
    import('react').ButtonHTMLAttributes<HTMLButtonElement> &
    import('@styli/types').AtomicProps &
    import('@styli/styled/dist/types').InjectedProps
>
export declare const Image: import('@styli/styled/dist/types').StyledComponent<
  import('react').ClassAttributes<HTMLImageElement> &
    import('react').ImgHTMLAttributes<HTMLImageElement> &
    import('@styli/types').AtomicProps &
    import('@styli/styled/dist/types').InjectedProps
>
export declare const Anchor: import('@styli/styled/dist/types').StyledComponent<
  import('react').ClassAttributes<HTMLAnchorElement> &
    import('react').AnchorHTMLAttributes<HTMLAnchorElement> &
    import('@styli/types').AtomicProps &
    import('@styli/styled/dist/types').InjectedProps
>
export declare const Heading: import('@styli/styled/dist/types').StyledComponent<
  import('react').ClassAttributes<HTMLHeadingElement> &
    import('react').HTMLAttributes<HTMLHeadingElement> &
    import('@styli/types').AtomicProps &
    import('@styli/styled/dist/types').InjectedProps
>
export declare const Input: import('@styli/styled/dist/types').StyledComponent<
  import('react').ClassAttributes<HTMLInputElement> &
    import('react').InputHTMLAttributes<HTMLInputElement> &
    import('@styli/types').AtomicProps &
    import('@styli/styled/dist/types').InjectedProps
>
export declare const Svg: import('@styli/styled/dist/types').StyledComponent<
  import('react').SVGProps<SVGSVGElement> &
    import('@styli/types').AtomicProps &
    import('@styli/styled/dist/types').InjectedProps
>

export * from '@styli/theming'
export * from '@styli/core'
export * from '@styli/styled'

export interface BoxComponent<T extends As, P = any> {
  <AsType extends As>(
    props: {
      as?: AsType
    } & P &
      Omit<ComponentProps<AsType>, keyof ComponentProps<T>> &
      Omit<ComponentProps<T>, keyof P> &
      AtomicProps,
  ): JSX.Element
  displayName?: string
  propTypes?: React.WeakValidationMap<PropsWithChildren<P> & ComponentProps<T>>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: PropsWithChildren<P> &
    ComponentProps<T> &
    AtomicProps & {
      as?: As
    }
}

export declare const Box: BoxComponent<'div', {}>

export declare function jsx(
  element: string,
  props?: any,
  ...children: any[]
): import('react').ReactElement<
  {},
  | string
  | ((
      props: any,
    ) =>
      | import('react').ReactElement<
          any,
          string | any | (new (props: any) => import('react').Component<any, any, any>)
        >
      | null)
  | (new (props: any) => import('react').Component<any, any, any>)
>
