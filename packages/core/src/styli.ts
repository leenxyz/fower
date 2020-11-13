import { Theme } from '@styli/theming'
import { isBrowser } from '@styli/utils'
import { Plugin, Config, Preset, Cache } from './types'

class Styli {
  private config: Config = {
    unit: 'px',
    inline: !isBrowser,
    plugins: [],
    theme: {} as Theme,
    transformUnit: (value: any) => value + this.getConfig<string>('unit'),
  }

  cache: Cache = {}
  componentKey = 0 // use generate component unite className

  setup(preset: Preset) {
    this.config = {
      ...this.config,
      ...preset,
    }
  }

  getTheme<T = any>(themeKey?: string): T {
    if (!themeKey) return this.config.theme as any
    return this.config.theme[themeKey]
  }

  getColors() {
    return this.getTheme('colors') || {}
  }

  getConfig<T = any>(type?: keyof Config): T {
    if (!type) return this.config as any
    return this.config[type] as any
  }

  getPlugins(): Plugin[][] {
    const pluginList = this.config.plugins
    return pluginList.reduce(
      (result, cur) => {
        result[cur.middleware ? 0 : 1].push(cur)
        return result
      },
      [[], []] as Plugin[][],
    )
  }

  use(...plugins: Plugin[]) {
    plugins.forEach((plugin) => {
      const idx = this.config.plugins.findIndex((configPlugin) => configPlugin.name === plugin.name)
      if (idx === -1) {
        this.config.plugins.push(plugin)
      } else {
        this.config.plugins[idx] = plugin
      }
    })
  }
}

export const styli = new Styli()
