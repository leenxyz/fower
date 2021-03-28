import { deepmerge, downFirst, isNumber, isPercentNumber } from '@styli/utils'
import { StyliPlugin, Configuration, Preset, Theme } from '@styli/types'
import { PartialDeep } from 'type-fest'
import { SetThemeParams } from './types'

class Styli {
  config: Preset = {
    unit: 'px',
    inline: false,
    plugins: [],
    theme: {} as Theme,
    transformUnit: (value: string | number) => {
      return '' + value + this.config.unit
    },
  }

  // user config
  configure = (config: Preset | ((config: Preset) => Preset)) => {
    if (typeof config === 'function') {
      // merge config
      Object.assign(this.config, config(this.config))
    } else {
      // replace config
      this.config = config
    }
  }

  getConfig = <T = any>(type?: keyof Configuration): T => {
    if (!type) return this.config as any
    return this.config[type] as any
  }

  getValue(value: string | number) {
    let numValue = value
    // w-80p => width: 80%
    if (isPercentNumber('' + value)) {
      return ('' + value).replace('p', '%')
    }

    if (isNumber(value)) {
      numValue = Number(value)
      // if num is between 0 and 1, convert it to percent number.
      if (numValue < 1 && numValue > 0) {
        return (numValue * 100).toFixed(6) + '%'
      }

      if (this.config.unit !== 'none' && this.config.transformUnit) {
        return this.config.transformUnit(numValue)
      }
    }

    return numValue
  }

  getTheme = <T = any>(themeKey?: keyof Theme): T => {
    if (!themeKey) return this.config.theme as any
    return this.config?.theme?.[themeKey] as any
  }

  setTheme = (partialThemeConfig: PartialDeep<SetThemeParams>) => {
    this.config.theme = deepmerge(this.config.theme || {}, partialThemeConfig) as any
  }

  isStyliColor = (value: string = '') => {
    const colors = this.getColors()
    const [prefix] = value?.split('-') || []

    if (!prefix) return false

    return !!colors[downFirst(prefix)] || /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(prefix)
  }

  getColors = () => {
    return this.getTheme('colors') || {}
  }

  /**
   * #444-D30 -> ['#444', 'D30']
   * @param value
   * @returns
   */
  extractColor = (value: string, colors?: any): [string, string] => {
    colors = colors ? colors : this.getColors()
    const [prefix, postfix] = (value || '').split('-') || []
    const colorName = downFirst(prefix)
    const color = colors[colorName] || prefix
    return [color, postfix]
  }

  use = (...plugins: StyliPlugin[]) => {
    plugins.forEach((plugin) => {
      const idx = this.config?.plugins?.findIndex(
        (configPlugin: StyliPlugin) => configPlugin.name === plugin.name,
      )
      const pluginIdx = (idx === -1 ? this.config?.plugins?.length : idx) as number

      if (this.config?.plugins) {
        this.config.plugins[pluginIdx] = plugin
      }
    })
    return this
  }
}

export const styli = new Styli()
