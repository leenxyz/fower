import React, {
  createElement,
  ReactElement,
  ElementType,
  forwardRef,
  ComponentProps,
  CSSProperties,
} from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { createStyle, Sheet, styleManager, styli } from '@styli/core'
import { themeContext } from '@styli/theming'
import { AtomicProps } from './types'
import { css } from '@styli/core'
export { AtomicProps } from './types'
const { Consumer } = themeContext

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
): StyledComponent<
  JSX.LibraryManagedAttributes<C, ComponentProps<C>> & AtomicProps & InjectedProps
> {
  const StyledComponent = forwardRef((props: any, ref) => {
    return (
      <Consumer>
        {(value: any) => {
          const sheet = new Sheet(props, value)
          const parsedProps: any = sheet.getParsedProps()
          const inline = styli.getConfig('inline')

          if (inline) {
            if (Array.isArray(props.style)) {
              parsedProps.style = [props.style, sheet.toStyles(), createStyle(...args)]
            } else {
              parsedProps.style = {
                ...props.style,
                ...sheet.toStyles(),
                ...createStyle(...args),
              }
            }
          } else {
            const { className } = props
            styleManager.insertStyles(sheet.toCss())
            const finalClassName = `
              ${className || ''}
              ${sheet.getClassNames()}
              ${css(...args)}
            `.trim()
            if (finalClassName) parsedProps.className = finalClassName
          }
          return createElement(component, { ref, ...parsedProps })
        }}
      </Consumer>
    )
  })

  hoistNonReactStatics(StyledComponent, component as any)
  return StyledComponent
}
