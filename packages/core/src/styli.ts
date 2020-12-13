import { formatColor, downFirst, isNumber, isPercentNumber, classifyPlugins } from '@styli/utils'
import { StyliPlugin, Configuration, Preset, Theme, PluginCategory, Atom } from '@styli/types'

class Styli {
  private config: Configuration = {
    dev: false,
    unit: 'px',
    inline: false,
    plugins: [] as StyliPlugin[],
    theme: {} as Theme,
  }

  classNameCache = new Map<string, boolean>()
  atomCache = new Map<string, Atom>()

  componentKey = 0 // use generate component unite className

  inited = false

  plugins: PluginCategory = {} as any

  configure = (config: Preset) => {
    if (this.inited) return

    const { plugins = [] } = config
    this.plugins = classifyPlugins(plugins)

    Object.assign(this.config, config)    
    this.inited = true
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

      if (this.config.unit !== 'none') {
        return numValue + this.config.unit
      }
    }

    return numValue
  }

  getTheme = <T = any>(themeKey?: keyof Theme): T => {
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
    if (!this.isStyliColor(value)) return value

    const colors = this.getColors()
    if (!value.includes('-')) return colors[downFirst(value)]

    const [prefix, postfix] = value.split('-')
    let color = colors[prefix] ? colors[prefix] : prefix
    return formatColor(postfix ? `${color}-${postfix}` : color)
  }

  use = (...plugins: StyliPlugin[]) => {
    plugins.forEach((plugin) => {
      const idx = this.config.plugins.findIndex((configPlugin) => configPlugin.name === plugin.name)
      const pluginIdx = idx === -1 ? this.config.plugins.length : idx
      this.config.plugins[pluginIdx] = plugin
    })
    this.plugins = classifyPlugins(this.config.plugins)
  }
}

export const styli = new Styli()
