import { Theme } from '../Theme'

type FnValue = (theme: Theme) => boolean | number | string | (boolean | number | string)[]
export type PropValue = FnValue | boolean | number | string | (boolean | number | string)[]
