import deepmerge from 'deepmerge'
import { StyliPlugin, Configuration, Theme, CSSObject } from '@styli/types'

type Strategy = 'replace' | 'merge' | 'deepmerge'

class Store {
  config = {
    unit: 'px',
    inline: false,
    prefix: '',
    pseudos: [],
    theme: {
      breakpoints: {},
      modes: [] as string[],
    } as Theme,
    plugins: [],
  } as Configuration

  get theme() {
    return this.config.theme
  }

  getConfig = () => {
    return this.config
  }

  // user config
  configure = (config: any, strategy: Strategy = 'deepmerge') => {
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

  setTheme = (partialThemeConfig: any) => {
    this.config.theme = deepmerge(this.config.theme || {}, partialThemeConfig) as any
  }

  use = (...plugins: StyliPlugin[]) => {
    this.config.plugins.push(...plugins)
  }

  registerAtomicProps = (
    matcher: string | RegExp,
    handleAtomOrStyleObject: StyliPlugin['handleAtom'] | CSSObject,
  ): StyliPlugin => {
    const plugin: StyliPlugin = {
      isMatch(key: string) {
        if (typeof matcher === 'string') return key === matcher
        if (matcher instanceof RegExp) return matcher.test(key)
        return false
      },
      handleAtom:
        typeof handleAtomOrStyleObject === 'function'
          ? handleAtomOrStyleObject
          : (atom) => {
              atom.style = handleAtomOrStyleObject as any
              return atom
            },
    }
    this.use(plugin)
    return plugin
  }
}

export const store = new Store()
