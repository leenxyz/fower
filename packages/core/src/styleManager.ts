import { isBrowser, throttle } from '@styli/utils'

/**
 * Manage <style></style>
 */
export class StyleManager {
  private tempStr: string = ''
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

  // TODO: insert cssStr once
  _insertStyles = throttle((cssStr: string) => {
    this.$style.innerHTML = this.$style.innerHTML + cssStr
    this.tempStr = ''
  }, 30)

  insertStyles(cssStr: string) {
    if (!isBrowser || !cssStr) return
    if (!this.$style) this.createStyleElement()
    this.tempStr = this.tempStr + cssStr
    this._insertStyles(this.tempStr)
  }
}

export const styleManager = new StyleManager()
