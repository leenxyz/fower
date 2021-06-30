import deepmerge from 'deepmerge'
import { FowerPlugin, Configuration, Theme, CSSObject, ModeType } from '@fower/types'
import { isBrowser } from '@fower/utils'
import type { Atom } from '@fower/atom'
import { PartialThemeConfig, PartialConfig } from './types'

type Strategy = 'replace' | 'merge' | 'deepmerge'

const modeCacheKey = 'fower-mode'

class Store {
  config = {
    unit: 'px',
    inline: false,
    important: false,
    mode: {
      currentMode: 'light',
      autoDarkMode: false,
      supportedModes: ['light', 'dark'],
      classPrefix: '',
    },
    prefix: '',
    pseudos: [],
    theme: {
      breakpoints: {},
    } as Theme,
    plugins: [],
  } as Configuration

  atomCache = new Map<string, Atom>()

  getAtomIds = () => {
    return Array.from(this.atomCache.keys())
  }

  // composed atomic props
  compositions = new Map<string, any>()

  get theme() {
    return this.config.theme
  }

  getConfig = () => {
    return this.config
  }

  // user config
  setConfig = (config: PartialConfig, strategy: Strategy = 'deepmerge') => {
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

  setTheme = (partialThemeConfig: PartialThemeConfig) => {
    this.config.theme = deepmerge(this.config.theme || {}, partialThemeConfig) as any
  }

  getMode = (): string => {
    return this.config.mode?.currentMode || ''
  }

  setMode = (mode: ModeType) => {
    if (!isBrowser) return
    const { currentMode } = this.config.mode
    if (currentMode) {
      document.documentElement.classList.remove(currentMode)
    }
    if (mode) {
      document.documentElement.classList.add(mode)
    }

    localStorage.setItem(modeCacheKey, mode)

    this.setConfig({ mode: { currentMode: mode } })
  }

  use = (...plugins: FowerPlugin[]) => {
    this.config.plugins.push(...plugins)
  }

  addAtom = (
    matcher: string | RegExp,
    handleAtomOrStyleObject: FowerPlugin['handleAtom'] | CSSObject,
  ): FowerPlugin => {
    const plugin: FowerPlugin = {
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

  composeAtom = (atomName: string, cssObject: CSSObject) => {
    if (this.compositions.get(atomName)) {
      console.warn(atomName, 'is existed')
    } else {
      this.compositions.set(atomName, cssObject)
    }
  }
}

export const store = new Store()
;(globalThis as any).__fower_store__ = store
