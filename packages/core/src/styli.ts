import { isBrowser } from '@styli/utils'
import { StyliPlugin, Configuration, Preset, Cache, Theme } from '@styli/types'

class Styli {
  private config: Configuration = {
    unit: 'px',
    inline: !isBrowser,
    plugins: [] as StyliPlugin[],
    theme: {} as Theme,
    transformUnit: (value: any) => value + this.getConfig<string>('unit'),
  }

  cache: Cache = {}
  componentKey = 0 // use generate component unite className

  configure = (config: Preset) => {
    this.config = {
      ...this.config,
      ...config,
    }
  }

  getTheme = <T = any>(themeKey?: string): T => {
    if (!themeKey) return this.config.theme as any
    return this.config.theme[themeKey]
  }

  getColors = () => {
    return this.getTheme('colors') || {}
  }

  getConfig = <T = any>(type?: keyof Configuration): T => {
    if (!type) return this.config as any
    return this.config[type] as any
  }

  getPlugins = (): StyliPlugin[][] => {
    const pluginList = this.config.plugins
    return pluginList.reduce(
      (result, cur) => {
        result[cur.middleware ? 0 : 1].push(cur)
        return result
      },
      [[], []] as StyliPlugin[][],
    )
  }

  use = (...plugins: StyliPlugin[]) => {
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
