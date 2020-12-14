import { formatColor, downFirst, isNumber, isPercentNumber, classifyPlugins } from '@styli/utils'
import { StyliPlugin, Configuration, Preset, Theme, PluginCategory, Atom } from '@styli/types'
import { defaultConfig } from './config'

class Styli {
  private config: Configuration = defaultConfig

  // cache control
  classNameCache = new Map<string, boolean>()
  atomCache = new Map<string, Atom>()

  // generate component unite className
  componentKey = 0

  // plugin classification
  plugins: PluginCategory = {} as PluginCategory

  // user config
  configure = (config: Preset) => {
    Object.assign(this.config, config)
    
    // set plugins
    const { plugins = [] } = this.config
    this.plugins = classifyPlugins(plugins)    
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
      const idx = this.config.plugins.findIndex((configPlugin: StyliPlugin) => configPlugin.name === plugin.name)
      const pluginIdx = idx === -1 ? this.config.plugins.length : idx
      this.config.plugins[pluginIdx] = plugin
    })
    this.plugins = classifyPlugins(this.config.plugins)
  }
}

export const styli = new Styli()
