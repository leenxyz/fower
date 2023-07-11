import {
  ReactElement,
  createElement,
  ElementType,
  forwardRef,
  ComponentProps,
  ReactNode,
} from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { upFirst, argsToProps } from '@fower/utils'
import { StyledArgs, store, Parser } from '@fower/core'
import { AtomicProps } from '@fower/atomic-props'

export type StyledComponent<P extends {}> = (props: P) => ReactElement<P, any> | null

export interface InjectedProps {
  children?: ReactNode
}

/**
 * style any Component
 * @param component tag name or React Component
 * @param args
 *
 * @example
 *
 * ```jsx
 * styled(Button)
 *
 * styled(Button, ['textXL', 'fontBold', 'textCenter'])
 *
 * styled(Button, {
 *    p: 8,
 *   color: 'red'
 * })
 *
 * styled(Button, ['textXL', 'fontBold', 'textCenter'], { color: 'red' })
 *
 * ```
 */
export function styled<C extends keyof JSX.IntrinsicElements | ElementType>(
  component: C,
  ...args: StyledArgs
): StyledComponent<
  JSX.LibraryManagedAttributes<C, ComponentProps<C>> & AtomicProps & InjectedProps
> {
  if (!component) return null as any

  const StyledComponent: any = forwardRef((props = {}, ref) => {
    const { inline } = store.config
    const prepareProps = { ...argsToProps(args, store.config?.objectPropKeys?.[0]), ...props }

    const parsedProps = inline
      ? getInLineParsedProps(prepareProps)
      : getCssParsedProps(prepareProps)
    return createElement(component, { ref, ...parsedProps })
  })

  StyledComponent.displayName =
    typeof component === 'string' ? `Styled${upFirst(component as string)}` : 'StyledComponent'

  hoistNonReactStatics(StyledComponent, component as any)
  return StyledComponent
}

// handle inline style
function getInLineParsedProps(props: any) {
  const parser = new Parser(props)
  const parsedProps = parser.getParsedProps()

  if (Array.isArray(props.style)) {
    parsedProps.style = [parser.toStyle(), props.style]
  } else {
    parsedProps.style = {
      ...parser.toStyle(),
      ...props.style,
    }
  }

  return parsedProps
}

// handle css style
function getCssParsedProps(props: any) {
  const parser = new Parser(props)
  const parsedProps = parser.getParsedProps()
  const finalClassName = [...parser.getClassNames()].join(' ').trim()

  if (finalClassName) {
    parsedProps.className = finalClassName
    parser.insertRules()
  }

  return parsedProps
}
