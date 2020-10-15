import React, { ReactElement, ElementType, forwardRef, ComponentProps, CSSProperties } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Modifiers } from '../types/Modifiers'
import { toFinalProps } from './toFinalProps'
import { createStyle } from './createStyle'

/**
 * styled
 * @example
 *
 * ```
 * styled(View)
 *
 * styled(View, 'f-20 fontBold', 'textCenter', { color: 'red' })
 *
 * styled(View, {
 *   color: 'red'
 * })
 * ```
 */

type StyledComponent<P extends {}> = (props: P) => ReactElement<P, any> | null

export function styled<C extends ElementType>(
  Component: C,
  ...args: (string | CSSProperties)[]
): StyledComponent<JSX.LibraryManagedAttributes<C, ComponentProps<C>> & Modifiers> {
  const StyledComponent = forwardRef((props, ref) => {
    const finalProps = toFinalProps(props)
    finalProps.style = { ...createStyle(...args), ...finalProps.style }
    return <Component ref={ref} {...finalProps} />
  })

  hoistNonReactStatics(StyledComponent, Component as any)
  return StyledComponent
}
