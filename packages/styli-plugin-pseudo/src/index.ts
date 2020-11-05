import { Plugin } from '@styli/core'

const regStr = '(--active|--checked|--disabled|--empty|--focus|--hover|--link|--visited)$'

function isPseudoKey(str: string) {
  return new RegExp(regStr).test(str)
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-pseudo',
    middleware(plugin, atom, sheet) {
      const { propKey } = atom

      if (!isPseudoKey(propKey)) return atom

      const result: any = propKey.match(new RegExp(`(.*)${regStr}`))
      const pseudo = result[2].replace('--', ':')
      const key = result[1]

      if (!plugin.isMatch!(key)) return atom

      let newAtom = plugin.onVisitProp!({ ...atom, propKey: key }, sheet)

      newAtom.propKey = propKey
      newAtom.type = 'prefix'
      newAtom.style = { [pseudo]: newAtom.style }

      return newAtom
    },
  }
}
