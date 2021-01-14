export { CSSObject, PseudosObject } from './CSSObject'
export { Atom } from './Atom'
export { StyliPlugin, PluginCategory } from './StyliPlugin'
export { SheetType } from './SheetType'
export { Props } from './Props'
export { Preset, Configuration } from './Configuration'

export * from './Theme'
export * from './StyliHTMLProps'
export * from './StyliColor'
export * from './AtomicProps'

import { Theme } from './Theme'

type FnValue = (theme: Theme) => boolean | number | string | (boolean | number | string)[]
export type PropValue = FnValue | boolean | number | string | (boolean | number | string)[]

import { Property } from 'csstype'
export { Property }
