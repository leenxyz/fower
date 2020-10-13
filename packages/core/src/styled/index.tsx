import React from 'react'
import { getStyles } from './utils'
import hoistNonReactStatics from 'hoist-non-react-statics'

/**
 * styled
 * @example
 *
 * ```
 * styled(View)('f-20 fontBold', 'textCenter', { color: 'red' })
 *
 * const styliStr = 'fontBold f-20'
 *
 * styled(View)`
 *   ${styliStr}
 *   textCenter
 *   center
 * `
 * ```
 */

export type StyledComponent<P extends {}> = (props: P) => React.ReactElement<P, any> | null
export type ComponentCreator<Component extends React.ElementType> = (
  ...val: any
) => StyledComponent<JSX.LibraryManagedAttributes<Component, React.ComponentProps<Component>>>

export function styled<Component extends React.ElementType>(
  Component: Component,
): ComponentCreator<Component> {
  const componentCreator = (...args: any) => {
    const StyledComponent = React.forwardRef(function StyledComponent(props, ref) {
      const { children, ...componentProps } = props as any

      const newProps = {
        ...componentProps,
        style: { ...getStyles(...args), ...componentProps.style },
      }

      return (
        <Component ref={ref} {...newProps}>
          {children}
        </Component>
      )
    })

    hoistNonReactStatics(StyledComponent, Component as any)
    return StyledComponent
  }

  return componentCreator
}

export default styled
