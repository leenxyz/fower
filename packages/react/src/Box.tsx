import React, { forwardRef, PropsWithChildren, ComponentProps, createElement } from 'react'
import { store, Parser, As } from '@fower/core'
import { AtomicProps } from '@fower/atomic-props'

export interface BoxComponent<T extends As, P = any> {
  <AsType extends As = 'div'>(
    props: { as?: AsType } & P &
      Omit<ComponentProps<AsType>, keyof ComponentProps<T>> &
      Omit<ComponentProps<T>, keyof P | 'color'> &
      AtomicProps,
  ): JSX.Element

  displayName?: string
  propTypes?: React.WeakValidationMap<PropsWithChildren<P> & ComponentProps<T>>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: PropsWithChildren<P> & ComponentProps<T> & AtomicProps & { as?: As }
}

export const Box: BoxComponent<'div', {}> = forwardRef((props, ref) => {
  const { as = 'div', ...rest } = props as any
  const parser = new Parser(rest)
  const parsedProps = parser.getParsedProps()

  const { inline } = store.config

  if (inline) {
    if (Array.isArray(rest.style)) {
      parsedProps.style = [parser.toStyle(), rest.style]
    } else {
      parsedProps.style = {
        ...parser.toStyle(),
        ...rest.style,
      }
    }
  } else {
    const finalClassName = parser.getClassNames().join(' ').trim()

    if (finalClassName) {
      parser.insertRules()
      parsedProps.className = finalClassName
    }
  }
  return createElement(as, { ref, ...parsedProps })
}) as any

Box.displayName = 'BoxComponent'
