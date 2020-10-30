import isBrowser from 'is-in-browser'
import { isEmptyObj, isFalsyProp } from '@styli/utils'
import { styleManager } from './styleManager'
import { Sheet } from './Sheet'
import { styli } from './styli'
import { Plugin, Props, Atom } from './types'
import { CSSProperties } from 'react'

export class PropsParser {
  private sheet: Sheet
  constructor(private readonly props: Props) {
    this.sheet = new Sheet(props)
  }

  private getClassName() {
    const className = this.sheet.getClassNames()
    if (!this.props.className) return className
    return `${this.props.className} ${className}`
  }

  private getPropsByInline(inline: boolean) {
    const { props, sheet } = this
    const keys = this.sheet.atoms.map((i) => i.propKey)
    const parsedProps: Props = {}

    for (let i in props) {
      if (keys.includes(i)) continue
      parsedProps[i] = props[i]
    }

    if (inline) {
      return { ...props, style: sheet.toStyles() }
    }

    /**
     * insert css to <style></style>
     */
    styleManager.insertStyles(sheet.toCss())

    parsedProps.className = this.getClassName()

    return parsedProps
  }

  private isInlne(): boolean {
    let inline: boolean

    if (typeof styli.config.inline === 'boolean') {
      inline = !!styli.config.inline
    } else {
      inline = isBrowser ? false : true
    }
    return inline
  }

  getParsedStyle(): CSSProperties {
    const { props } = this

    if (isEmptyObj(props)) return {}

    const plugins = styli.getConfig<Plugin[]>('plugins')

    for (const [propKey, propValue] of Object.entries(props)) {
      if (isFalsyProp(propValue)) continue

      /** handle css props */
      if (propKey === 'css') {
        this.sheet.addAtom({ propKey, propValue, style: propValue })
        continue
      }

      /** register plugin */
      for (const plugin of plugins) {
        if (plugin.onVisitProp) {
          const initialAtom = { propKey, propValue, style: {} } as Atom

          const newAtom = plugin.onVisitProp(initialAtom, this.sheet)

          if (newAtom) {
            this.sheet.addAtom(newAtom)
            break
          }
        }
      }
    }

    return this.sheet.toStyles()
  }

  getParsedProps(): Props {
    const { props } = this
    if (isEmptyObj(props)) return {}
    const inline: boolean = this.isInlne()
    return this.getPropsByInline(inline)
  }
}
