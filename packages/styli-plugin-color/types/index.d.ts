import { StyliPlugin, Property, Theme } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set font color
     *
     * ```css
     * { color: #dfa }
     * ```
     *
     * @example
     * ```tsx
     * <Text black>Hello world</Text>
     * ```
     */

    transparent?: boolean
    black?: boolean
    white?: boolean

    gray10?: boolean // #f7fafc
    gray20?: boolean // #edf2f7
    gray30?: boolean // #e2e8f0
    gray40?: boolean // #cbd5e0
    gray50?: boolean // #a0aec0
    gray60?: boolean // #718096
    gray70?: boolean // #4a5568
    gray80?: boolean // #2d3748
    gray90?: boolean // #1a202c

    red10?: boolean // #fff5f5
    red20?: boolean // #fed7d7
    red30?: boolean // #feb2b2
    red40?: boolean // #fc8181
    red50?: boolean // #f56565
    red60?: boolean // #e53e3e
    red70?: boolean // #c53030
    red80?: boolean // #9b2c2c
    red90?: boolean // #742a2a

    orange10?: boolean // #fffaf0
    orange20?: boolean // #feebc8
    orange30?: boolean // #fbd38d
    orange40?: boolean // #f6ad55
    orange50?: boolean // #ed8936
    orange60?: boolean // #dd6b20
    orange70?: boolean // #c05621
    orange80?: boolean // #9c4221
    orange90?: boolean // #7b341e

    yellow10?: boolean // #fffff0
    yellow20?: boolean // #fefcbf
    yellow30?: boolean // #faf089
    yellow40?: boolean // #f6e05e
    yellow50?: boolean // #ecc94b
    yellow60?: boolean // #d69e2e
    yellow70?: boolean // #b7791f
    yellow80?: boolean // #975a16
    yellow90?: boolean // #744210

    green10?: boolean // #f0fff4
    green20?: boolean // #c6f6d5
    green30?: boolean // #9ae6b4
    green40?: boolean // #68d391
    green50?: boolean // #48bb78
    green60?: boolean // #38a169
    green70?: boolean // #2f855a
    green80?: boolean // #276749
    green90?: boolean // #22543d

    teal10?: boolean // #e6fffa
    teal20?: boolean // #b2f5ea
    teal30?: boolean // #81e6d9
    teal40?: boolean // #4fd1c5
    teal50?: boolean // #38b2ac
    teal60?: boolean // #319795
    teal70?: boolean // #2c7a7b
    teal80?: boolean // #285e61
    teal90?: boolean // #234e52

    blue10?: boolean // #ebf8ff
    blue20?: boolean // #bee3f8
    blue30?: boolean // #90cdf4
    blue40?: boolean // #63b3ed
    blue50?: boolean // #4299e1
    blue60?: boolean // #3182ce
    blue70?: boolean // #2b6cb0
    blue80?: boolean // #2c5282
    blue90?: boolean // #2a4365

    indigo10?: boolean // #ebf4ff
    indigo20?: boolean // #c3dafe
    indigo30?: boolean // #a3bffa
    indigo40?: boolean // #7f9cf5
    indigo50?: boolean // #667eea
    indigo60?: boolean // #5a67d8
    indigo70?: boolean // #4c51bf
    indigo80?: boolean // #434190
    indigo90?: boolean // #3c366b

    purple10?: boolean // #faf5ff
    purple20?: boolean // #e9d8fd
    purple30?: boolean // #d6bcfa
    purple40?: boolean // #b794f4
    purple50?: boolean // #9f7aea
    purple60?: boolean // #805ad5
    purple70?: boolean // #6b46c1
    purple80?: boolean // #553c9a
    purple90?: boolean // #44337a

    pink10?: boolean // #fff5f7
    pink20?: boolean // #fed7e2
    pink30?: boolean // #fbb6ce
    pink40?: boolean // #f687b3
    pink50?: boolean // #ed64a6
    pink60?: boolean // #d53f8c
    pink70?: boolean // #b83280
    pink80?: boolean // #97266d
    pink90?: boolean // #702459

    /**
     * Set color
     *
     * @example
     * ```tsx
     * <View c="#FFF"></View>
     * ```
     */
    color?:
      | Property.Color
      | Property.Color[]
      | ((theme: Theme) => Property.Color | Property.Color[])
      | boolean

    colorBrand?: boolean

    colorPrimary?: boolean

    colorSecondary?: boolean

    colorInfo?: boolean

    colorWarning?: boolean

    colorError?: boolean

    colorSuccess?: boolean
  }
}
