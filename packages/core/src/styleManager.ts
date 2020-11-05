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
    $head?.append($style)
    this.$style = $style
    return $style
  }

  insertStyles(cssStr: string) {
    if (!isBrowser) return
    if (!this.$style) this.createStyleElement()

    // TODO: 多个还是单个好?
    this.$style.innerHTML = this.$style.innerHTML + cssStr
  }
}

export const styleManager = new StyleManager()
