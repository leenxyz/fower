import { isBrowser } from '@fower/utils'

class StyleSheet {
  private $style: HTMLStyleElement | null = globalThis.document?.querySelector?.('[data-fower]')

  private cssString = ''

  private ssrAtomIds: string[] | null = null

  private createStyleElement(): HTMLStyleElement {
    const $style = document.createElement('style')

    $style.dataset.fower = ''
    document.head.append($style)

    return $style
  }

  getSsrAtomIds(): string[] {
    if (!this.$style) return []
    if (this.ssrAtomIds) return this.ssrAtomIds
    return this.$style?.dataset.fower?.split(',') || []
  }

  insertStyleToHtml(rules: string[]) {
    if (!this.$style) {
      this.$style = this.createStyleElement()
    }

    // const str = rules.join('\n')
    // this.$style.innerHTML += str
    // return

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
