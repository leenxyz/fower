import { isBrowser } from '@fower/utils'

class StyleSheet {
  private $style!: HTMLStyleElement

  private createStyleElement(): HTMLStyleElement {
    const $style = document.createElement('style')

    $style.dataset.fower = 'fower'
    document.head.append($style)
    this.$style = $style
    return $style
  }

  insertStyles(rules: string[] = []) {
    if (!isBrowser || !rules.length) return
    if (!this.$style) this.createStyleElement()

    this.$style.innerHTML = this.$style.innerHTML + rules.join('\n')
    // for (const rule of rules) {
    //   try {
    //     this.$style.sheet?.insertRule(rule)
    //   } catch (error) {
    //     console.warn(error)
    //   }
    // }
  }
}

export const styleSheet = new StyleSheet()
