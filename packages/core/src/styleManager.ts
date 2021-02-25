import { isBrowser } from '@styli/utils'

/**
 * Manage <style></style>
 */
export class StyleManager {
  private $style!: HTMLStyleElement

  private createStyleElement(): HTMLStyleElement {
    const $style = document.createElement('style')
    const $head = document.querySelector('head')

    $style.dataset.styli = 'styli'
    $style.innerHTML = '*{border: 0 solid #ccc;box-sizing: border-box}' // TODO: global style
    $head?.append($style)
    this.$style = $style
    return $style
  }

  insertStyles(cssStr: string) {
    if (!isBrowser || !cssStr) return
    if (!this.$style) this.createStyleElement()
    this.$style.innerHTML = this.$style.innerHTML + cssStr
  }
}

export const styleManager = new StyleManager()
