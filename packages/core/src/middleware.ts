import { Plugin } from './types'

export const coreMiddleware: Plugin = {
  name: 'styli-plugin-core',
  middleware(plugin, atom, sheet) {
    const { propKey } = atom
    if (!plugin.isMatch!(propKey)) return atom
    return plugin.onVisitProp!(atom, sheet)
  },
}
