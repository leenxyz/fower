import { Plugin } from '@styli/core'

const regStr =
  '--(active|checked|disabled|enabled|default|empty|focus|focus-within|invalid|hover|link|visited|first-child|last-child|after|before|placeholder|selection)$'

const specials = ['after', 'before', 'placeholder', 'selection']

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
      let pseudo = result[2].replace('--', '')
      pseudo = specials.includes(pseudo) ? '::' + pseudo : ':' + pseudo
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
