import { Plugin, Config, Preset, Cache, Middleware } from './types'

class Styli {
  config: Config = {
    unit: 'px',
    plugins: [],
    middleware: [],
    theme: {
      spacing: [],
    },
    transformUnit: (value: any) => value + (this.getConfig('unit') as string),
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
    return this.config.theme[themeKey] || {}
  }

  getColors() {
    return this.getTheme('typography').colors || {}
  }

  getConfig<T = any>(type?: keyof Config): T {
    if (!type) return this.config as any
    return this.config[type] as any
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

  middleware(...middleware: Middleware[]) {
    this.config.middleware = this.config.middleware.concat(middleware)
  }
}

export const styli = new Styli()
