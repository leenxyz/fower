import { isBrowser } from '@styli/utils'

class StyleSheet {
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

    this.$style.innerHTML = this.$style.innerHTML + rules.join('')
    // for (const rule of rules) {
    //   this.$style.sheet?.insertRule(rule)
    // }
  }
}

export const styleSheet = new StyleSheet()
