import { isBrowser } from '@styli/utils'

class StyleManager {
  private $style!: HTMLStyleElement

  private createStyleElement(): HTMLStyleElement {
    const $style = document.createElement('style')

    $style.dataset.styli = 'styli'
    document.head.append($style)
    this.$style = $style
    return $style
  }

  insertStyles(rules: string[] = []) {
    if (!isBrowser || !rules.length) return
    if (!this.$style) this.createStyleElement()

    for (const rule of rules) {
      this.$style.sheet?.insertRule(rule)
    }
  }
}

export const styleManager = new StyleManager()
