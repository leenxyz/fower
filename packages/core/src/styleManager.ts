import isBrowser from 'is-in-browser'

/**
 * Manage <style></style>
 */
export class StyleManager {
  private $style!: HTMLStyleElement

  private createStyleElement() {
    const $style = document.createElement('style')
    const $head = document.querySelector('head')

    $style.dataset.styli = 'styli'
    $head?.append($style)
    this.$style = $style
  }

  insertStyles(rule: string) {
    if (!isBrowser) return
    if (!this.$style) this.createStyleElement()

    // TODO: 多个还是单个好?
    this.$style.innerHTML = this.$style.innerHTML + rule
  }
}

export const styleManager = new StyleManager()
