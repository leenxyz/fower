export interface Colors {
  /**
   * Set font color
   *
   * ```css
   * { color: #dfa }
   * ```
   *
   * 用法：
   *
   * ```tsx
   * <Text black>Hello world</Text>
   * ```
   */
  black?: boolean

  white?: boolean

  gray?: boolean
  gray100?: boolean // #f7fafc
  gray200?: boolean // #edf2f7
  gray300?: boolean // #e2e8f0
  gray400?: boolean // #cbd5e0
  gray500?: boolean // #a0aec0
  gray600?: boolean // #718096
  gray700?: boolean // #4a5568
  gray800?: boolean // #2d3748
  gray900?: boolean // #1a202c

  red?: boolean
  red100?: boolean // #fff5f5
  red200?: boolean // #fed7d7
  red300?: boolean // #feb2b2
  red400?: boolean // #fc8181
  red500?: boolean // #f56565
  red600?: boolean // #e53e3e
  red700?: boolean // #c53030
  red800?: boolean // #9b2c2c
  red900?: boolean // #742a2a

  orange?: boolean
  orange100?: boolean // #fffaf0
  orange200?: boolean // #feebc8
  orange300?: boolean // #fbd38d
  orange400?: boolean // #f6ad55
  orange500?: boolean // #ed8936
  orange600?: boolean // #dd6b20
  orange700?: boolean // #c05621
  orange800?: boolean // #9c4221
  orange900?: boolean // #7b341e

  yellow?: boolean
  yellow100?: boolean // #fffff0
  yellow200?: boolean // #fefcbf
  yellow300?: boolean // #faf089
  yellow400?: boolean // #f6e05e
  yellow500?: boolean // #ecc94b
  yellow600?: boolean // #d69e2e
  yellow700?: boolean // #b7791f
  yellow800?: boolean // #975a16
  yellow900?: boolean // #744210

  green?: boolean
  green100?: boolean // #f0fff4
  green200?: boolean // #c6f6d5
  green300?: boolean // #9ae6b4
  green400?: boolean // #68d391
  green500?: boolean // #48bb78
  green600?: boolean // #38a169
  green700?: boolean // #2f855a
  green800?: boolean // #276749
  green900?: boolean // #22543d

  teal?: boolean
  teal100?: boolean // #e6fffa
  teal200?: boolean // #b2f5ea
  teal300?: boolean // #81e6d9
  teal400?: boolean // #4fd1c5
  teal500?: boolean // #38b2ac
  teal600?: boolean // #319795
  teal700?: boolean // #2c7a7b
  teal800?: boolean // #285e61
  teal900?: boolean // #234e52

  blue?: boolean
  blue100?: boolean // #ebf8ff
  blue200?: boolean // #bee3f8
  blue300?: boolean // #90cdf4
  blue400?: boolean // #63b3ed
  blue500?: boolean // #4299e1
  blue600?: boolean // #3182ce
  blue700?: boolean // #2b6cb0
  blue800?: boolean // #2c5282
  blue900?: boolean // #2a4365

  indigo?: boolean
  indigo100?: boolean // #ebf4ff
  indigo200?: boolean // #c3dafe
  indigo300?: boolean // #a3bffa
  indigo400?: boolean // #7f9cf5
  indigo500?: boolean // #667eea
  indigo600?: boolean // #5a67d8
  indigo700?: boolean // #4c51bf
  indigo800?: boolean // #434190
  indigo900?: boolean // #3c366b

  purple?: boolean
  purple100?: boolean // #faf5ff
  purple200?: boolean // #e9d8fd
  purple300?: boolean // #d6bcfa
  purple400?: boolean // #b794f4
  purple500?: boolean // #9f7aea
  purple600?: boolean // #805ad5
  purple700?: boolean // #6b46c1
  purple800?: boolean // #553c9a
  purple900?: boolean // #44337a

  pink?: boolean
  pink100?: boolean // #fff5f7
  pink200?: boolean // #fed7e2
  pink300?: boolean // #fbb6ce
  pink400?: boolean // #f687b3
  pink500?: boolean // #ed64a6
  pink600?: boolean // #d53f8c
  pink700?: boolean // #b83280
  pink800?: boolean // #97266d
  pink900?: boolean // #702459

  colorIndianred?: boolean // #CD5C5C
  colorLightcoral?: boolean // #F08080
  colorSalmon?: boolean // #FA8072
  colorDarksalmon?: boolean // #E9967A
  colorLightsalmon?: boolean // #FFA07A
  colorCrimson?: boolean // #DC143C
  colorRed?: boolean // #FF0000
  colorFirebrick?: boolean // #B22222
  colorDarkred?: boolean // #8B0000

  colorPink?: boolean // #FFC0CB
  colorLightpink?: boolean // #FFB6C1
  colorHotpink?: boolean // #FF69B4
  colorDeeppink?: boolean // #FF1493
  colorMediumvioletred?: boolean // #C71585
  colorPlevioletred?: boolean // #DB7093

  colorCoral?: boolean // #FF7F50
  colorTomato?: boolean // #FF6347
  colorOrangered?: boolean // #FF4500
  colorDarkorange?: boolean // #FF8C00
  colorOrange?: boolean // #FFA500

  colorGold?: boolean // #FFD700
  colorYellow?: boolean // #FFFF00
  colorLightyellow?: boolean // #FFFFE0
  colorLemonchiffon?: boolean // #FFFACD
  colorLightgoldenrodyellow?: boolean // #FAFAD2
  colorPapayawhip?: boolean // #FFEFD5
  colorMoccasin?: boolean // #FFE4B5
  colorPeachpuff?: boolean // #FFDAB9
  colorPalegoldenrod?: boolean // #EEE8AA
  colorKhaki?: boolean // #F0E68C
  colorDarkkhaki?: boolean // #BDB76B

  colorLavender?: boolean // #E6E6FA
  colorThistle?: boolean // #D8BFD8
  colorPlum?: boolean // #DDA0DD
  colorViolet?: boolean // #EE82EE
  colorOrchid?: boolean // #DA70D6
  colorFuchsia?: boolean // #FF00FF
  colorMagenta?: boolean // #FF00FF
  colorMediumorchid?: boolean // #BA55D3
  colorMediumpurple?: boolean // #9370DB
  colorRebeccapurple?: boolean //#663399
  colorBlueviolet?: boolean // #8A2BE2
  colorDarkviolet?: boolean // #9400D3
  colorDarkorchid?: boolean // #9932CC
  colorDarkmagenta?: boolean // #8B008B
  colorPurple?: boolean // #800080
  colorIndigo?: boolean // #4B0082
  colorSlateblue?: boolean // #6A5ACD
  colorDarkslateblue?: boolean // #483D8B
  colorMediumslateblue?: boolean // #7B68EE

  colorGreenyellow?: boolean // #ADFF2F
  colorChartreuse?: boolean // #7FFF00
  colorLawngreen?: boolean // #7CFC00
  colorLime?: boolean // #00FF00
  colorLimegreen?: boolean // #32CD32
  colorPalegreen?: boolean // #98FB98
  colorLightgreen?: boolean // #90EE90
  colorMediumspringgreen?: boolean // #00FA9A
  colorSpringgreen?: boolean // #00FF7F
  colorMediumseagreen?: boolean // #3CB371
  colorSeagreen?: boolean // #2E8B57
  colorForestgreen?: boolean // #228B22
  colorGreen?: boolean // #008000
  colorDarkgreen?: boolean // #006400
  colorYellowgreen?: boolean // #9ACD32
  colorOlivedrab?: boolean // #6B8E23
  colorOlive?: boolean // #808000
  colorDarkolivegreen?: boolean // #556B2F
  colorMediumaquamarine?: boolean // #66CDAA
  colorDarkseagreen?: boolean // #8FBC8B
  colorLightseagreen?: boolean // #20B2AA
  colorDarkcyan?: boolean // #008B8B
  colorTeal?: boolean // #008080

  colorAqua?: boolean // #00FFFF
  colorCyan?: boolean // #00FFFF
  colorLightcyan?: boolean // #E0FFFF
  colorPaleturquoise?: boolean // #AFEEEE
  colorAquamarine?: boolean // #7FFFD4
  colorTurquoise?: boolean // #40E0D0
  colorMediumturquoise?: boolean // #48D1CC
  colorDarkturquoise?: boolean // #00CED1
  colorCadetblue?: boolean // #5F9EA0
  colorSteelblue?: boolean // #4682B4
  colorLightsteelblue?: boolean // #B0C4DE
  colorPowderblue?: boolean // #B0E0E6
  colorLightblue?: boolean // #ADD8E6
  colorSkyblue?: boolean // #87CEEB
  colorLightskyblue?: boolean // #87CEFA
  colorDeepskyblue?: boolean // #00BFFF
  colorDodgerblue?: boolean // #1E90FF
  colorCornflowerblue?: boolean // #6495ED
  colorRoyalblue?: boolean // #4169E1
  colorBlue?: boolean // #0000FF
  colorMediumblue?: boolean // #0000CD
  colorDarkblue?: boolean // #00008B
  colorNavy?: boolean // #000080
  colorMidnightblue?: boolean // MIDNIGHTBLUE

  colorCornsilk?: boolean // #FFF8DC
  colorBlanchedalmond?: boolean // #FFEBCD
  colorBisque?: boolean // #FFE4C4
  colorNavajowhite?: boolean // #FFDEAD
  colorWheat?: boolean // #F5DEB3
  colorBurlywood?: boolean // #DEB887
  colorTan?: boolean // #D2B48C
  colorRosybrown?: boolean // #BC8F8F
  colorSandybrown?: boolean // #F4A460
  colorGoldenrod?: boolean // #DAA520
  colorDarkgoldenrod?: boolean // #B8860B
  colorPeru?: boolean // #CD853F
  colorChocolate?: boolean // #D2691E
  colorSaddlebrown?: boolean // #8B4513
  colorSienna?: boolean // #A0522D
  colorBrown?: boolean // #A52A2A
  colorMaroon?: boolean // #800000

  colorSnow?: boolean // #FFFAFA
  colorHoneydew?: boolean // #F0FFF0
  colorMintcream?: boolean // #F5FFFA
  colorAzure?: boolean // #F0FFFF
  colorAliceblue?: boolean // #F0F8FF
  colorGhostwhite?: boolean // #F8F8FF
  colorWhitesmoke?: boolean // #F5F5F5
  colorSeashell?: boolean // #FFF5EE
  colorBeige?: boolean // #F5F5DC
  colorOldlace?: boolean // #FDF5E6
  colorFloralwhite?: boolean // #FFFAF0
  colorIvory?: boolean // #FFFFF0
  colorAntiquewhite?: boolean // #FAEBD7
  colorLinen?: boolean // #FAF0E6
  colorLavenderblush?: boolean // #FFF0F5
  colorMistyrose?: boolean // MISTYROSE

  colorGainsboro?: boolean // #DCDCDC
  colorLightgray?: boolean // #D3D3D3
  colorSilver?: boolean //  #C0C0C0
  colorDarkgray?: boolean // #A9A9A9
  colorGray?: boolean // #808080
  colorDimgray?: boolean // #696969
  colorLightslategray?: boolean // #778899
  colorSlategray?: boolean // #708090
  colorDarkslategray?: boolean // #2F4F4F
}
