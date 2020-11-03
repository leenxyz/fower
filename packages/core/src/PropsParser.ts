import isBrowser from 'is-in-browser'
import { isEmptyObj, isFalsyProp, isPseudoKey } from '@styli/utils'
import { styleManager } from './styleManager'
import { Sheet } from './Sheet'
import { styli } from './styli'
import { Plugin, Props, Atom } from './types'
import { CSSProperties } from 'react'

const pseudoMap: any = {
  a: 'active',
  c: 'checked',
  d: 'disabled',
  e: 'empty',
  f: 'focus',
  h: 'hover',
  l: 'link',
  v: 'visited',
}

export class PropsParser {
  // TODO: 太耦合了
  sheet: Sheet
  constructor(private readonly props: Props) {
    this.sheet = new Sheet(props)
    this.traverseProps()
  }

  /**
   * traverse Props to init atoms
   */
  private traverseProps(): void {
    const { props } = this
    if (isEmptyObj(props)) return

    const plugins = styli.getConfig<Plugin[]>('plugins')

    for (const [propKey, propValue] of Object.entries(props)) {
      if (isFalsyProp(propValue)) continue

      const propIsPseudo = isPseudoKey(propKey)
      const [key, pseType] = propIsPseudo ? propKey.split('_') : [propKey]

      for (const plugin of plugins) {
        if (!plugin.isMatch(key)) continue

        if (plugin.onVisitProp) {
          const initialAtom = { propKey: key, propValue, style: {}, type: 'style' } as Atom
          const newAtom = plugin.onVisitProp(initialAtom, this.sheet)

          if (propIsPseudo) {
            newAtom.propKey = propKey
            newAtom.type = 'prefix'
            newAtom.style = {
              [':' + pseudoMap[pseType]]: newAtom.style,
            }
          }

          this.sheet.addAtom(newAtom)
          break
        }
      }
    }
  }

  private getClassName() {
    const className = this.sheet.getClassNames()
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
