import { StyliColor } from '@styli/types'
import { Theme } from '../Theme'

type BgColor = StyliColor | StyliColor[] | boolean

type BgColorFn = (theme: Theme) => BgColor

export interface Backgrounds {
  bg?: BgColor | BgColorFn

  bgColor?: BgColor | BgColorFn

  bgImg?: string | boolean

  bgPos?: string | boolean

  bgSize?: string | boolean

  bgBlack?: boolean

  bgWhite?: boolean

  bgBrand?: boolean

  bgPrimary?: boolean

  bgSecondary?: boolean

  bgInfo?: boolean

  bgWarning?: boolean

  bgError?: boolean

  bgSuccess?: boolean

  bgGray?: boolean
  bgGray10?: boolean // #f7fafc
  bgGray20?: boolean // #edf2f7
  bgGray30?: boolean // #e2e8f0
  bgGray40?: boolean // #cbd5e0
  bgGray50?: boolean // #a0aec0
  bgGray60?: boolean // #718096
  bgGray70?: boolean // #4a5568
  bgGray80?: boolean // #2d3748
  bgGray90?: boolean // #1a202c

  bgRed?: boolean
  bgRed10?: boolean // #fff5f5
  bgRed20?: boolean // #fed7d7
  bgRed30?: boolean // #feb2b2
  bgRed40?: boolean // #fc8181
  bgRed50?: boolean // #f56565
  bgRed60?: boolean // #e53e3e
  bgRed70?: boolean // #c53030
  bgRed80?: boolean // #9b2c2c
  bgRed90?: boolean // #742a2a

  bgOrange?: boolean // orange
  bgOrange10?: boolean // #fffaf0
  bgOrange20?: boolean // #feebc8
  bgOrange30?: boolean // #fbd38d
  bgOrange40?: boolean // #f6ad55
  bgOrange50?: boolean // #ed8936
  bgOrange60?: boolean // #dd6b20
  bgOrange70?: boolean // #c05621
  bgOrange80?: boolean // #9c4221
  bgOrange90?: boolean // #7b341e

  bgYellow?: boolean
  bgYellow10?: boolean // #fffff0
  bgYellow20?: boolean // #fefcbf
  bgYellow30?: boolean // #faf089
  bgYellow40?: boolean // #f6e05e
  bgYellow50?: boolean // #ecc94b
  bgYellow60?: boolean // #d69e2e
  bgYellow70?: boolean // #b7791f
  bgYellow80?: boolean // #975a16
  bgYellow90?: boolean // #744210

  bgGreen?: boolean
  bgGreen10?: boolean // #f0fff4
  bgGreen20?: boolean // #c6f6d5
  bgGreen30?: boolean // #9ae6b4
  bgGreen40?: boolean // #68d391
  bgGreen50?: boolean // #48bb78
  bgGreen60?: boolean // #38a169
  bgGreen70?: boolean // #2f855a
  bgGreen80?: boolean // #276749
  bgGreen90?: boolean // #22543d

  bgTeal?: boolean
  bgTeal10?: boolean // #e6fffa
  bgTeal20?: boolean // #b2f5ea
  bgTeal30?: boolean // #81e6d9
  bgTeal40?: boolean // #4fd1c5
  bgTeal50?: boolean // #38b2ac
  bgTeal60?: boolean // #319795
  bgTeal70?: boolean // #2c7a7b
  bgTeal80?: boolean // #285e61
  bgTeal90?: boolean // #234e52

  bgBlue?: boolean
  bgBlue10?: boolean // #ebf8ff
  bgBlue20?: boolean // #bee3f8
  bgBlue30?: boolean // #90cdf4
  bgBlue40?: boolean // #63b3ed
  bgBlue50?: boolean // #4299e1
  bgBlue60?: boolean // #3182ce
  bgBlue70?: boolean // #2b6cb0
  bgBlue80?: boolean // #2c5282
  bgBlue90?: boolean // #2a4365

  bgIndigo?: boolean
  bgIndigo10?: boolean // #ebf4ff
  bgIndigo20?: boolean // #c3dafe
  bgIndigo30?: boolean // #a3bffa
  bgIndigo40?: boolean // #7f9cf5
  bgIndigo50?: boolean // #667eea
  bgIndigo60?: boolean // #5a67d8
  bgIndigo70?: boolean // #4c51bf
  bgIndigo80?: boolean // #434190
  bgIndigo90?: boolean // #3c366b

  bgPurple?: boolean
  bgPurple10?: boolean // #faf5ff
  bgPurple20?: boolean // #e9d8fd
  bgPurple30?: boolean // #d6bcfa
  bgPurple40?: boolean // #b794f4
  bgPurple50?: boolean // #9f7aea
  bgPurple60?: boolean // #805ad5
  bgPurple70?: boolean // #6b46c1
  bgPurple80?: boolean // #553c9a
  bgPurple90?: boolean // #44337a

  bgPink?: boolean
  bgPink10?: boolean // #fff5f7
  bgPink20?: boolean // #fed7e2
  bgPink30?: boolean // #fbb6ce
  bgPink40?: boolean // #f687b3
  bgPink50?: boolean // #ed64a6
  bgPink60?: boolean // #d53f8c
  bgPink70?: boolean // #b83280
  bgPink80?: boolean // #97266d
  bgPink90?: boolean // #702459
}
