import { Plugin, Config, Preset, Cache } from './types'

class Styli {
  config: Config = {
    unit: 'px',
    plugins: [],
    theme: {
      colors: {},
    },
    transformUnit: (value: any) => value + (this.getConfig('unit') as string),
  }

  cache: Cache = {}

  setup(preset: Preset) {
    this.config = {
      ...this.config,
      ...preset,
    }
  }

  getTheme<T = any>(themeKey?: string): T {
    if (!themeKey) return this.config.theme as any
    return this.config.theme[themeKey] || {}
  }

  getColors = () => {
    return this.getTheme('typography').colors || {}
  }

  getConfig<T = any>(type?: keyof Config): T {
    if (!type) return this.config as any
    return this.config[type] as any
  }

  use = (...plugins: Plugin[]) => {
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
