import { Middleware } from './types'

export const coreMiddleware: Middleware = (plugin, atom, sheet) => {
  const { propKey } = atom
  if (!plugin.isMatch(propKey)) return atom
  return plugin.onVisitProp(atom, sheet)
}
