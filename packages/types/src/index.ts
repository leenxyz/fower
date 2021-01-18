import { Property } from 'csstype'
import { Theme } from './Theme'

export { Property }
export { Atom } from './Atom'
export { Props } from './Props'
export { Theme } from './Theme'
export { SheetType } from './SheetType'
export { StyliColor } from './StyliColor'
export { AtomicProps } from './AtomicProps'
export { CSSObject, PseudosObject } from './CSSObject'
export { Preset, Configuration } from './Configuration'
export { StyliPlugin, PluginCategory } from './StyliPlugin'
export { As, ComponentProps, StyliHTMLProps } from './StyliHTMLProps'


type FnValue = (theme: Theme) => boolean | number | string | (boolean | number | string)[]
export type PropValue = FnValue | boolean | number | string | (boolean | number | string)[]
