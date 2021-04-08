import React, { forwardRef, PropsWithChildren, ComponentProps, createElement } from 'react'
import { store } from '@styli/store'
import { AtomicProps, As } from '@styli/types'
import { Parser } from '@styli/parser'

export interface BoxComponent<T extends As, P = any> {
  <AsType extends As = 'div'>(
    props: { as?: AsType } & P &
      Omit<ComponentProps<AsType>, keyof ComponentProps<T>> &
      Omit<ComponentProps<T>, keyof P> &
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
  const parsedProps: any = parser.getParsedProps()

  const { inline } = store.config

  if (inline) {
    if (Array.isArray(rest.style)) {
      parsedProps.style = [parser.toStyles(), rest.style]
    } else {
      parsedProps.style = {
        ...parser.toStyles(),
        ...rest.style,
      }
    }
  } else {
    const { className = '' } = rest || {}
    parser.insertRule()
    const finalClassName = parser.getClassNames(className).join(' ')

    if (finalClassName) parsedProps.className = finalClassName
  }
  return createElement(as, { ref, ...parsedProps })
}) as any
