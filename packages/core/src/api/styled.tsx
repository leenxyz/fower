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
    finalProps.style = { ...getStyles(...args), ...finalProps.style }
    return <Component ref={ref} {...finalProps} />
  })

  hoistNonReactStatics(StyledComponent, Component as any)
  return StyledComponent
}

export function templateStrToCommonStr(literals: string[], ...values: any[]) {
  let output = ''
  let index = 0
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index]
  }
  output += literals[index]
  return output.replace(/\n+/g, '')
}

// 解析样式
export function getStyles(...args: any): CSSProperties {
  // 从模板字符串解析
  if (Array.isArray(args[0])) {
    const [literals, ...values] = args
    return createStyle(templateStrToCommonStr(literals, ...values))
  }
  return createStyle(...args)
}
