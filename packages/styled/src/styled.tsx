import { createElement, ElementType, forwardRef, ComponentProps } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { store } from '@fower/store'
import { upFirst } from '@fower/utils'
import { AtomicProps } from '@fower/types'
import { getCssParsedProps, getInLineParsedProps } from './util'
import { StyledComponent, InjectedProps, Args } from './types'

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
 * styled(View, 'textXL fontBold', 'textCenter', { color: 'red' })
 *
 * styled(View, {
 *   color: 'red'
 * })
 * ```
 */
export function styled<C extends keyof JSX.IntrinsicElements | ElementType>(
  component: C,
  ...args: Args
): StyledComponent<
  JSX.LibraryManagedAttributes<C, ComponentProps<C>> & AtomicProps & InjectedProps
> {
  if (!component) {
    return null as any
  }

  const StyledComponent = forwardRef((props: any = {}, ref) => {
    const { inline } = store.config
    const parsedProps = inline ? getInLineParsedProps(props, args) : getCssParsedProps(props, args)
    return createElement(component, { ref, ...parsedProps })
  })

  StyledComponent.displayName =
    typeof component === 'string' ? `Styled${upFirst(component as string)}` : 'StyledComponent'

  hoistNonReactStatics(StyledComponent, component as any)
  return StyledComponent
}
