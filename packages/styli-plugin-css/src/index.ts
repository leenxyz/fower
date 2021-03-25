import { CSSObject, StyliPlugin } from '@styli/types'
import { parse } from '@styli/css-object-processor'
import { hash } from '@styli/utils'

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-css',
    isMatch(key) {
      return key === 'css'
    },
    onAtomStyleCreate(atom) {
      atom.type = 'prefix'
      atom.style = atom.propValue as CSSObject

      // TODO: parse 了多次， 性能需要优化
      const parsed = parse(atom.propValue as any)
      const wrapperClassName = 'css-' + hash(JSON.stringify(atom.propValue))

      const atomicClassNames = parsed
        .filter((i) => i.selector === '')
        .map((i) => 'css-' + hash(JSON.stringify(i.style)))

      const classNames = [wrapperClassName, ...atomicClassNames]

      atom.className = classNames.join(' ')
      atom.classNames = classNames
      return atom
    },
  }
}
