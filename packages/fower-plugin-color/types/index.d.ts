import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
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
     * <Box black>Hello world</Box>
     * ```
     */
    transparent?: boolean
    black?: boolean
    white?: boolean

    /**
     * Set color
     *
     * @example
     * ```tsx
     * <Box color="#fff"></Box>
     * <Box color="red500--T20"></Box> // transparentize color 变更透明
     * <Box color="red500--O20"></Box> // opacify color 变不透明
     * <Box color="red500--L20"></Box> // lighten color 变亮
     * <Box color="red500--D20"></Box> // darken color 变暗
     * ```
     */
    color?: FowerColor | boolean

    brand?: boolean
    brand50?: boolean
    brand100?: boolean
    brand200?: boolean
    brand300?: boolean
    brand400?: boolean
    brand500?: boolean
    brand600?: boolean
    brand700?: boolean
    brand800?: boolean
    brand900?: boolean

    rose50?: boolean // '#fff1f2'
    rose100?: boolean // '#ffe4e6'
    rose200?: boolean // '#fecdd3'
    rose300?: boolean // '#fda4af'
    rose400?: boolean // '#fb7185'
    rose500?: boolean // '#f43f5e'
    rose600?: boolean // '#e11d48'
    rose700?: boolean // '#be123c'
    rose800?: boolean // '#9f1239'
    rose900?: boolean // '#881337'

    pink50?: boolean // '#fdf2f8'
    pink100?: boolean // '#fce7f3'
    pink200?: boolean // '#fbcfe8'
    pink300?: boolean // '#f9a8d4'
    pink400?: boolean // '#f472b6'
    pink500?: boolean // '#ec4899'
    pink600?: boolean // '#db2777'
    pink700?: boolean // '#be185d'
    pink800?: boolean // '#9d174d'
    pink900?: boolean // '#831843'

    fuchsia50?: boolean // '#fdf4ff'
    fuchsia100?: boolean // '#fae8ff'
    fuchsia200?: boolean // '#f5d0fe'
    fuchsia300?: boolean // '#f0abfc'
    fuchsia400?: boolean // '#e879f9'
    fuchsia500?: boolean // '#d946ef'
    fuchsia600?: boolean // '#c026d3'
    fuchsia700?: boolean // '#a21caf'
    fuchsia800?: boolean // '#86198f'
    fuchsia900?: boolean // '#701a75'

    purple50?: boolean // '#faf5ff'
    purple100?: boolean // '#f3e8ff'
    purple200?: boolean // '#e9d5ff'
    purple300?: boolean // '#d8b4fe'
    purple400?: boolean // '#c084fc'
    purple500?: boolean // '#a855f7'
    purple600?: boolean // '#9333ea'
    purple700?: boolean // '#7e22ce'
    purple800?: boolean // '#6b21a8'
    purple900?: boolean // '#581c87'

    violet50?: boolean // '#f5f3ff'
    violet100?: boolean // '#ede9fe'
    violet200?: boolean // '#ddd6fe'
    violet300?: boolean // '#c4b5fd'
    violet400?: boolean // '#a78bfa'
    violet500?: boolean // '#8b5cf6'
    violet600?: boolean // '#7c3aed'
    violet700?: boolean // '#6d28d9'
    violet800?: boolean // '#5b21b6'
    violet900?: boolean // '#4c1d95'

    indigo50?: boolean // '#eef2ff'
    indigo100?: boolean // '#e0e7ff'
    indigo200?: boolean // '#c7d2fe'
    indigo300?: boolean // '#a5b4fc'
    indigo400?: boolean // '#818cf8'
    indigo500?: boolean // '#6366f1'
    indigo600?: boolean // '#4f46e5'
    indigo700?: boolean // '#4338ca'
    indigo800?: boolean // '#3730a3'
    indigo900?: boolean // '#312e81'

    blue50?: boolean // '#eff6ff'
    blue100?: boolean // '#dbeafe'
    blue200?: boolean // '#bfdbfe'
    blue300?: boolean // '#93c5fd'
    blue400?: boolean // '#60a5fa'
    blue500?: boolean // '#3b82f6'
    blue600?: boolean // '#2563eb'
    blue700?: boolean // '#1d4ed8'
    blue800?: boolean // '#1e40af'
    blue900?: boolean // '#1e3a8a'

    cyan50?: boolean // '#ecfeff'
    cyan100?: boolean // '#cffafe'
    cyan200?: boolean // '#a5f3fc'
    cyan300?: boolean // '#67e8f9'
    cyan400?: boolean // '#22d3ee'
    cyan500?: boolean // '#06b6d4'
    cyan600?: boolean // '#0891b2'
    cyan700?: boolean // '#0e7490'
    cyan800?: boolean // '#155e75'
    cyan900?: boolean // '#164e63'

    teal50?: boolean // '#f0fdfa'
    teal100?: boolean // '#ccfbf1'
    teal200?: boolean // '#99f6e4'
    teal300?: boolean // '#5eead4'
    teal400?: boolean // '#2dd4bf'
    teal500?: boolean // '#14b8a6'
    teal600?: boolean // '#0d9488'
    teal700?: boolean // '#0f766e'
    teal800?: boolean // '#115e59'
    teal900?: boolean // '#134e4a'

    green50?: boolean // '#f0fdf4'
    green100?: boolean // '#dcfce7'
    green200?: boolean // '#bbf7d0'
    green300?: boolean // '#86efac'
    green400?: boolean // '#4ade80'
    green500?: boolean // '#22c55e'
    green600?: boolean // '#16a34a'
    green700?: boolean // '#15803d'
    green800?: boolean // '#166534'
    green900?: boolean // '#14532d'

    lime50?: boolean // '#f7fee7'
    lime100?: boolean // '#ecfccb'
    lime200?: boolean // '#d9f99d'
    lime300?: boolean // '#bef264'
    lime400?: boolean // '#a3e635'
    lime500?: boolean // '#84cc16'
    lime600?: boolean // '#65a30d'
    lime700?: boolean // '#4d7c0f'
    lime800?: boolean // '#3f6212'
    lime900?: boolean // '#365314'

    yellow50?: boolean // '#fefce8'
    yellow100?: boolean // '#fef9c3'
    yellow200?: boolean // '#fef08a'
    yellow300?: boolean // '#fde047'
    yellow400?: boolean // '#facc15'
    yellow500?: boolean // '#eab308'
    yellow600?: boolean // '#ca8a04'
    yellow700?: boolean // '#a16207'
    yellow800?: boolean // '#854d0e'
    yellow900?: boolean // '#713f12'

    orange50?: boolean // '#fff7ed'
    orange100?: boolean // '#ffedd5'
    orange200?: boolean // '#fed7aa'
    orange300?: boolean // '#fdba74'
    orange400?: boolean // '#fb923c'
    orange500?: boolean // '#f97316'
    orange600?: boolean // '#ea580c'
    orange700?: boolean // '#c2410c'
    orange800?: boolean // '#9a3412'
    orange900?: boolean // '#7c2d12'

    red50?: boolean // '#fef2f2'
    red100?: boolean // '#fee2e2'
    red200?: boolean // '#fecaca'
    red300?: boolean // '#fca5a5'
    red400?: boolean // '#f87171'
    red500?: boolean // '#ef4444'
    red600?: boolean // '#dc2626'
    red700?: boolean // '#b91c1c'
    red800?: boolean // '#991b1b'
    red900?: boolean // '#7f1d1d'

    trueGray50?: boolean // '#fafafa'
    trueGray100?: boolean // '#f5f5f5'
    trueGray200?: boolean // '#e5e5e5'
    trueGray300?: boolean // '#d4d4d4'
    trueGray400?: boolean // '#a3a3a3'
    trueGray500?: boolean // '#737373'
    trueGray600?: boolean // '#525252'
    trueGray700?: boolean // '#404040'
    trueGray800?: boolean // '#262626'
    trueGray900?: boolean // '#171717'

    gray50?: boolean // '#fafafa'
    gray100?: boolean // '#f4f4f5'
    gray200?: boolean // '#e4e4e7'
    gray300?: boolean // '#d4d4d8'
    gray400?: boolean // '#a1a1aa'
    gray500?: boolean // '#71717a'
    gray600?: boolean // '#52525b'
    gray700?: boolean // '#3f3f46'
    gray800?: boolean // '#27272a'
    gray900?: boolean // '#18181b'
  }
}
