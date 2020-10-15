import {
  createElement,
  ReactElement,
  ElementType,
  forwardRef,
  ComponentProps,
  CSSProperties,
} from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Modifiers } from '../types/Modifiers'
import { toFinalProps } from './toFinalProps'
import { createStyle } from './createStyle'

/**
 * styled
 */

type StyledComponent<P extends {}> = (props: P) => ReactElement<P, any> | null

/**
 * style any Component
 * @param component tag name or React Component
 * @param args
 *
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
export function styled<C extends keyof JSX.IntrinsicElements | ElementType>(
  component: C,
  ...args: (string | CSSProperties)[]
): StyledComponent<JSX.LibraryManagedAttributes<C, ComponentProps<C>> & Modifiers> {
  const StyledComponent = forwardRef((props, ref) => {
    const finalProps = toFinalProps(props)
    finalProps.style = { ...createStyle(...args), ...finalProps.style }

    return createElement(component, { ref, ...finalProps })
  })

  hoistNonReactStatics(StyledComponent, component as any)
  return StyledComponent
}
