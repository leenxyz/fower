import { Property } from 'csstype'
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

  border?: Property.Border | boolean
  borderT?: boolean | number | string
  borderR?: boolean | number | string
  borderB?: boolean | number | string
  borderL?: boolean | number | string
  borderX?: boolean | number | string
  borderY?: boolean | number | string

  borderWidth?: Property.BorderWidth
  borderColor?: Property.BorderColor
  BorderStyle?: Property.BorderStyle

  borderTopWidth?: Property.BorderTopWidth | number | boolean
  borderTopColor?: Property.BorderTopColor | boolean
  borderTopStyle?: Property.BorderTopStyle | boolean

  borderLeftWidth?: Property.BorderLeftWidth | number | boolean
  borderLeftColor?: Property.BorderLeftColor | boolean
  BorderLeftStyle?: Property.BorderLeftStyle | boolean

  borderBottomWidth?: Property.BorderBottomWidth | number | boolean
  borderBottomColor?: Property.BorderBottomColor | boolean
  borderBottomStyle?: Property.BorderBottomStyle | boolean

  borderRightWidth?: Property.BorderRightWidth | number | boolean
  borderRightColor?: Property.BorderRightColor | boolean
  borderRightStyle?: Property.BorderRightStyle | boolean
}
