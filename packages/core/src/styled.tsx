import {
  createElement,
  ReactElement,
  ElementType,
  forwardRef,
  ComponentProps,
  CSSProperties,
} from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Modifiers } from './types'
import { createStyle } from './createStyle'
import { PropsParser } from './PropsParser'

type StyledComponent<P extends {}> = (props: P) => ReactElement<P, any> | null

export interface InjectedProps {
  // TODO: handle any
  children?: any
}

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
): StyledComponent<JSX.LibraryManagedAttributes<C, ComponentProps<C>> & Modifiers & InjectedProps> {
  const StyledComponent = forwardRef((props, ref) => {
    const propsParser = new PropsParser(props)
    const parsedStyle = propsParser.getParsedStyle()
    const parsedProps = propsParser.getParsedProps()

    parsedProps.style = { ...createStyle(...args), ...parsedStyle }

    return createElement(component, { ref, ...parsedProps })
  })

  hoistNonReactStatics(StyledComponent, component as any)
  return StyledComponent
}
