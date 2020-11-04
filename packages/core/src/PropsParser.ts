import isBrowser from 'is-in-browser'
import { isEmptyObj, isFalsyProp } from '@styli/utils'
import { styleManager } from './styleManager'
import { Sheet } from './Sheet'
import { styli } from './styli'
import { Plugin, Props, Atom, Middleware } from './types'
import { CSSProperties } from 'react'
import { coreMiddleware } from './middleware'
import hash from 'string-hash'
import isEqual from 'lodash.isequal'

export class PropsParser {
  // TODO: 太耦合了
  sheet: Sheet
  className: string
  constructor(private readonly props: Props) {
    const classNamePrefix = (styli.config.prefix || 'css') + '-'
    const className = classNamePrefix + hash('' + styli.componentKey++)
    this.className = className
    this.sheet = new Sheet(props, className)
    this.traverseProps()
  }

  /**
   * traverse Props to init atoms
   */
  private traverseProps(): void {
    const { props } = this
    if (isEmptyObj(props)) return

    const plugins = styli.getConfig<Plugin[]>('plugins')
    const middleware = styli.getConfig<Middleware[]>('middleware')
    const middlewareList = [coreMiddleware, ...middleware]

    for (const [propKey, propValue] of Object.entries(props)) {
      if (isFalsyProp(propValue)) continue

      for (const plugin of plugins) {
        const initialAtom = { propKey, propValue, style: {}, type: 'style' } as Atom

        const newAtom = middlewareList.reduce(
          (finalAtom, middleware) => {
            return middleware(plugin, finalAtom, this.sheet)
          },
          { ...initialAtom }, // if use initialAtom directly, isEqual(newAtom, initialAtom) always for true.
        )

        if (!isEqual(newAtom, initialAtom)) {
          this.sheet.addAtom(newAtom)
          break
        }
      }
    }
  }

  private getClassName() {
    const unitClassName = this.sheet.getClassNames()
    const className = `${this.className} ${unitClassName}`
    if (!this.props.className) return className
    return `${this.props.className} ${className}`
  }

  private getPropsByInline(inline: boolean) {
    const { props, sheet } = this
    const parsedProps: Props = Object.keys(props).reduce((result: Props, cur: any) => {
      const prop = sheet.atoms.find(({ propKey }) => propKey === cur)
      return prop ? result : { ...result, [cur]: props[cur] }
    }, {} as Props)

    if (inline) {
      parsedProps.style = sheet.toStyles()
      return parsedProps
    }

    /**
     * insert css to <style></style>
     */
    styleManager.insertStyles(sheet.toCss())

    parsedProps.className = this.getClassName()

    return parsedProps
  }

  private isInline(): boolean {
    let inline: boolean

    if (typeof styli.config.inline === 'boolean') {
      inline = !!styli.config.inline
    } else {
      inline = isBrowser ? false : true
    }

    return inline
  }

  getParsedStyle(): CSSProperties {
    return this.sheet.toStyles()
  }

  getParsedProps(): Props {
    const { props } = this
    if (isEmptyObj(props)) return {}
    const inline: boolean = this.isInline()
    return this.getPropsByInline(inline)
  }
}
