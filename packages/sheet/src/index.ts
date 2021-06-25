import { isBrowser } from '@fower/utils'

class StyleSheet {
  private $style: HTMLStyleElement | null = globalThis.document?.querySelector?.('[data-fower]')

  private cssString = ''

  private createStyleElement(): HTMLStyleElement {
    const $style = document.createElement('style')

    $style.dataset.fower = 'fower'
    document.head.append($style)

    return $style
  }

  insertStyleToHtml(rules: string[]) {
    if (!this.$style) {
      this.$style = this.createStyleElement()
    }

    for (const rule of rules) {
      try {
        this.$style.sheet!.insertRule(rule)
      } catch (error) {
        console.warn(error)
      }
    }
  }

  insertStyles(rules: string[] = []) {
    if (!rules.length) return

    if (isBrowser) return this.insertStyleToHtml(rules)

    this.cssString = this.cssString + ' ' + rules.join(' ')
  }

  getStyle() {
    return this.cssString
  }
}

export const styleSheet = new StyleSheet()
