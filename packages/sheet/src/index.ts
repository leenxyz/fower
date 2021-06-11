import { isBrowser } from '@fower/utils'

class StyleSheet {
  private $style!: HTMLStyleElement

  cssString = ''

  constructor() {
    const fowerTag = document.querySelector('[data-fower]')
    if (fowerTag) {
      this.$style = fowerTag as HTMLStyleElement
    }
  }

  private createStyleElement(): HTMLStyleElement {
    const $style = document.createElement('style')

    $style.dataset.fower = 'fower'
    document.head.append($style)
    this.$style = $style
    return $style
  }

  insertStyleToHtml(rules: string[]) {
    if (!this.$style) this.createStyleElement()

    for (const rule of rules) {
      try {
        this.$style.sheet?.insertRule(rule)
      } catch (error) {
        console.warn(error)
      }
    }
  }

  insertStyles(rules: string[] = []) {
    if (!rules.length) return

    if (isBrowser) return this.insertStyleToHtml(rules)

    this.cssString = this.cssString + ';' + rules.join(';')
  }
}

export const styleSheet = new StyleSheet()
