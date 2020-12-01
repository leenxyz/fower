import { formatColor, downFirst } from '@styli/utils'
import { StyliPlugin, Configuration, Preset, Cache, Theme } from '@styli/types'

class Styli {
  private config: Configuration = {
    unit: 'px',
    inline: false,
    plugins: [] as StyliPlugin[],
    theme: {} as Theme,
    transformUnit: (value: any) => value + this.getConfig<string>('unit'),
  }

  classNameCache: Cache = {}
  atomCache: Cache = {}
  componentKey = 0 // use generate component unite className

  inited = false

  configure = (config: Preset) => {
    if (this.inited) return

    this.config = {
      ...this.config,
      ...config,
    }
    this.inited = true
  }

  getTheme = <T = any>(themeKey?: string): T => {
    if (!themeKey) return this.config.theme as any
    return this.config.theme[themeKey]
  }

  isStyliColor = (value: string = '') => {
    const colors = this.getColors()
    const [prefix] = value.split('-')
    return !!colors[downFirst(prefix)]
  }

  getColors = () => {
    return this.getTheme('colors') || {}
  }

  getColorValue = (value: string = ''): string => {
    const colors = this.getColors()

    if (!value.includes('-')) return colors[downFirst(value)]
    const [prefix, postfix] = value.split('-')
    let color = colors[prefix] ? colors[prefix] : prefix
    return formatColor(postfix ? `${color}-${postfix}` : color)
  }

  getConfig = <T = any>(type?: keyof Configuration): T => {
    if (!type) return this.config as any
    return this.config[type] as any
  }

  getPlugins = (): StyliPlugin[][] => {
    const pluginList = this.config.plugins
    return pluginList.reduce(
      (result, cur) => {
        if (cur.middleware) {
          result[0].push(cur)
        }
        if (cur.onStyleCreate) {
          result[2].push(cur)
        }
        if (cur.onAtomStyleCreate) {
          result[1].push(cur)
        }
        return result
      },
      [[], [], []] as StyliPlugin[][],
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
