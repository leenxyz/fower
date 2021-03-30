import { createElement, ElementType, forwardRef, ComponentProps } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { styli } from '@styli/core'
import { upFirst } from '@styli/utils'
import { AtomicProps } from '@styli/types'
import { getCssParsedProps, getInLineParsedProps } from './util'
import { StyledComponent, InjectedProps, Args } from './types'

const theme = styli.getTheme()

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
    // throw new Error('required component param')
    return null as any
  }

  const StyledComponent = forwardRef((props: any = {}, ref) => {
    const { inline } = styli.config
    const parsedProps = inline
      ? getInLineParsedProps(props, theme, args)
      : getCssParsedProps(props, theme, args)
    return createElement(component, { ref, ...parsedProps })
  })

  StyledComponent.displayName =
    typeof component === 'string' ? `Styled${upFirst(component as string)}` : 'StyledComponent'

  hoistNonReactStatics(StyledComponent, component as any)
  return StyledComponent
}
