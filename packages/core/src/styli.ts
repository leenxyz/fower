import { deepmerge, downFirst } from '@styli/utils'
import { StyliPlugin, Configuration, Theme } from '@styli/types'
import { PartialDeep } from 'type-fest'
import { SetThemeParams } from './types'

type Strategy = 'replace' | 'merge' | 'deepmerge'

class Styli {
  config = {
    unit: 'px',
    inline: false,
    plugins: [],
    theme: {} as Theme,
    transformUnit: (value: string | number) => {
      return '' + value + this.config.unit
    },
  } as Configuration

  // user config
  configure = (config: PartialDeep<Configuration>, strategy: Strategy = 'deepmerge') => {
    if (strategy === 'replace') {
      this.config = config as Configuration
    } else if (strategy === 'merge') {
      this.config = { ...this.config, ...config } as any
    } else {
      this.config = deepmerge(this.config, config) as any
    }
  }

  getTheme = (): Theme => {
    return this.config.theme
  }

  setTheme = (partialThemeConfig: PartialDeep<SetThemeParams>) => {
    this.config.theme = deepmerge(this.config.theme || {}, partialThemeConfig) as any
  }

  getColors = () => {
    return this.getTheme().colors
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
    this.config.plugins.push(...plugins)
  }

  addAtomicProps = (matcher: string | RegExp, handleAtom: StyliPlugin['handleAtom']) => {
    const plugin: StyliPlugin = {
      isMatch(key: string) {
        if (typeof matcher === 'string') return key === matcher
        if (matcher instanceof RegExp) return matcher.test(key)
        return false
      },
      handleAtom,
    }
    this.use(plugin)
  }
}

export const styli = new Styli()
