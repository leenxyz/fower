import CSS from 'csstype'
import { PropValue } from './common.types'

export interface Borders {
  rounded?: PropValue

  roundedT?: PropValue
  roundedR?: PropValue
  roundedB?: PropValue
  roundedL?: PropValue

  roundedTL?: PropValue
  roundedTR?: PropValue
  roundedBL?: PropValue
  roundedBR?: PropValue

  border?: CSS.Property.Border | boolean
  borderT?: boolean | number | string
  borderR?: boolean | number | string
  borderB?: boolean | number | string
  borderL?: boolean | number | string
  borderX?: boolean | number | string
  borderY?: boolean | number | string
}
