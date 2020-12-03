import React, { createElement, ElementType, forwardRef, ComponentProps } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { themeContext } from '@styli/theming'
import { AtomicProps } from '@styli/types'
import { getInLineParsedProps } from './util'
import { StyledComponent, InjectedProps, Args } from './types'
const { Consumer } = themeContext

export function styledInLine<C extends keyof JSX.IntrinsicElements | ElementType>(
  component: C,
  ...args: Args
): StyledComponent<
  JSX.LibraryManagedAttributes<C, ComponentProps<C>> & AtomicProps & InjectedProps
> {
  const StyledComponent = forwardRef((props: any = {}, ref) => {
    return (
      <Consumer>
        {(value: any) => {
          const parsedProps = getInLineParsedProps(props, value, args)
          return createElement(component, { ref, ...parsedProps })
        }}
      </Consumer>
    )
  })

  hoistNonReactStatics(StyledComponent, component as any)
  return StyledComponent
}
