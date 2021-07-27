import { FowerPlugin, FowerColor } from '@fower/core'
import * as CSS from 'csstype'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set background
     *
     * @example
     * ```tsx
     * <Box bg="#112233"></Box>
     * <Box bg="red"></Box>
     * <Box bg="red500"></Box>
     * ```
     */
    bg?: FowerColor | boolean

    /**
     * Set backgroundImage
     *
     * @example
     * ```tsx
     * <Box backgroundImage="url('http...')"></Box>
     * ```
     */
    backgroundImage?: CSS.Property.BackgroundImage | boolean

    /**
     * Set backgroundPosition
     *
     * @example
     * ```tsx
     * <Box backgroundPosition="top left"></Box>
     * ```
     */
    backgroundPosition?: CSS.Property.BackgroundPosition | boolean

    /**
     * Set backgroundSize
     *
     * @example
     * ```tsx
     * <Box backgroundSize="100% 100%"></Box>
     * ```
     */
    backgroundSize?: string | false

    /**
     * Set backgroundRepeat
     *
     * @example
     * ```tsx
     * <Box backgroundRepeat="no-repeat"></Box>
     * ```
     */
    backgroundRepeat?: CSS.Property.BackgroundRepeat | false

    bgClip?: CSS.Property.BackgroundClip | false
    bgClipBorder?: boolean
    bgClipPadding?: boolean
    bgClipContent?: boolean
    bgClipText?: boolean

    bgTransparent?: boolean
    bgBlack?: boolean
    bgWhite?: boolean

    bgBrand?: boolean
    bgBrand50?: boolean
    bgBrand100?: boolean
    bgBrand200?: boolean
    bgBrand300?: boolean
    bgBrand400?: boolean
    bgBrand500?: boolean
    bgBrand600?: boolean
    bgBrand700?: boolean
    bgBrand800?: boolean
    bgBrand900?: boolean

    bgRose50?: boolean
    bgRose100?: boolean
    bgRose200?: boolean
    bgRose300?: boolean
    bgRose400?: boolean
    bgRose500?: boolean
    bgRose600?: boolean
    bgRose700?: boolean
    bgRose800?: boolean
    bgRose900?: boolean

    bgPink50?: boolean
    bgPink100?: boolean
    bgPink200?: boolean
    bgPink300?: boolean
    bgPink400?: boolean
    bgPink500?: boolean
    bgPink600?: boolean
    bgPink700?: boolean
    bgPink800?: boolean
    bgPink900?: boolean

    bgFuchsia50?: boolean
    bgFuchsia100?: boolean
    bgFuchsia200?: boolean
    bgFuchsia300?: boolean
    bgFuchsia400?: boolean
    bgFuchsia500?: boolean
    bgFuchsia600?: boolean
    bgFuchsia700?: boolean
    bgFuchsia800?: boolean
    bgFuchsia900?: boolean

    bgPurple50?: boolean // '#faf5ff'
    bgPurple100?: boolean // '#f3e8ff'
    bgPurple200?: boolean // '#e9d5ff'
    bgPurple300?: boolean // '#d8b4fe'
    bgPurple400?: boolean // '#c084fc'
    bgPurple500?: boolean // '#a855f7'
    bgPurple600?: boolean // '#9333ea'
    bgPurple700?: boolean // '#7e22ce'
    bgPurple800?: boolean // '#6b21a8'
    bgPurple900?: boolean // '#581c87'

    bgViolet50?: boolean // '#f5f3ff'
    bgViolet100?: boolean // '#ede9fe'
    bgViolet200?: boolean // '#ddd6fe'
    bgViolet300?: boolean // '#c4b5fd'
    bgViolet400?: boolean // '#a78bfa'
    bgViolet500?: boolean // '#8b5cf6'
    bgViolet600?: boolean // '#7c3aed'
    bgViolet700?: boolean // '#6d28d9'
    bgViolet800?: boolean // '#5b21b6'
    bgViolet900?: boolean // '#4c1d95'

    bgIndigo50?: boolean // '#eef2ff'
    bgIndigo100?: boolean // '#e0e7ff'
    bgIndigo200?: boolean // '#c7d2fe'
    bgIndigo300?: boolean // '#a5b4fc'
    bgIndigo400?: boolean // '#818cf8'
    bgIndigo500?: boolean // '#6366f1'
    bgIndigo600?: boolean // '#4f46e5'
    bgIndigo700?: boolean // '#4338ca'
    bgIndigo800?: boolean // '#3730a3'
    bgIndigo900?: boolean // '#312e81'

    bgBlue50?: boolean // '#eff6ff'
    bgBlue100?: boolean // '#dbeafe'
    bgBlue200?: boolean // '#bfdbfe'
    bgBlue300?: boolean // '#93c5fd'
    bgBlue400?: boolean // '#60a5fa'
    bgBlue500?: boolean // '#3b82f6'
    bgBlue600?: boolean // '#2563eb'
    bgBlue700?: boolean // '#1d4ed8'
    bgBlue800?: boolean // '#1e40af'
    bgBlue900?: boolean // '#1e3a8a'

    bgCyan50?: boolean // '#ecfeff'
    bgCyan100?: boolean // '#cffafe'
    bgCyan200?: boolean // '#a5f3fc'
    bgCyan300?: boolean // '#67e8f9'
    bgCyan400?: boolean // '#22d3ee'
    bgCyan500?: boolean // '#06b6d4'
    bgCyan600?: boolean // '#0891b2'
    bgCyan700?: boolean // '#0e7490'
    bgCyan800?: boolean // '#155e75'
    bgCyan900?: boolean // '#164e63'

    bgTeal50?: boolean // '#f0fdfa'
    bgTeal100?: boolean // '#ccfbf1'
    bgTeal200?: boolean // '#99f6e4'
    bgTeal300?: boolean // '#5eead4'
    bgTeal400?: boolean // '#2dd4bf'
    bgTeal500?: boolean // '#14b8a6'
    bgTeal600?: boolean // '#0d9488'
    bgTeal700?: boolean // '#0f766e'
    bgTeal800?: boolean // '#115e59'
    bgTeal900?: boolean // '#134e4a'

    bgGreen50?: boolean // '#f0fdf4'
    bgGreen100?: boolean // '#dcfce7'
    bgGreen200?: boolean // '#bbf7d0'
    bgGreen300?: boolean // '#86efac'
    bgGreen400?: boolean // '#4ade80'
    bgGreen500?: boolean // '#22c55e'
    bgGreen600?: boolean // '#16a34a'
    bgGreen700?: boolean // '#15803d'
    bgGreen800?: boolean // '#166534'
    bgGreen900?: boolean // '#14532d'

    bgLime50?: boolean // '#f7fee7'
    bgLime100?: boolean // '#ecfccb'
    bgLime200?: boolean // '#d9f99d'
    bgLime300?: boolean // '#bef264'
    bgLime400?: boolean // '#a3e635'
    bgLime500?: boolean // '#84cc16'
    bgLime600?: boolean // '#65a30d'
    bgLime700?: boolean // '#4d7c0f'
    bgLime800?: boolean // '#3f6212'
    bgLime900?: boolean // '#365314'

    bgYellow50?: boolean // '#fefce8'
    bgYellow100?: boolean // '#fef9c3'
    bgYellow200?: boolean // '#fef08a'
    bgYellow300?: boolean // '#fde047'
    bgYellow400?: boolean // '#facc15'
    bgYellow500?: boolean // '#eab308'
    bgYellow600?: boolean // '#ca8a04'
    bgYellow700?: boolean // '#a16207'
    bgYellow800?: boolean // '#854d0e'
    bgYellow900?: boolean // '#713f12'

    bgOrange50?: boolean // '#fff7ed'
    bgOrange100?: boolean // '#ffedd5'
    bgOrange200?: boolean // '#fed7aa'
    bgOrange300?: boolean // '#fdba74'
    bgOrange400?: boolean // '#fb923c'
    bgOrange500?: boolean // '#f97316'
    bgOrange600?: boolean // '#ea580c'
    bgOrange700?: boolean // '#c2410c'
    bgOrange800?: boolean // '#9a3412'
    bgOrange900?: boolean // '#7c2d12'

    bgRed50?: boolean // '#fef2f2'
    bgRed100?: boolean // '#fee2e2'
    bgRed200?: boolean // '#fecaca'
    bgRed300?: boolean // '#fca5a5'
    bgRed400?: boolean // '#f87171'
    bgRed500?: boolean // '#ef4444'
    bgRed600?: boolean // '#dc2626'
    bgRed700?: boolean // '#b91c1c'
    bgRed800?: boolean // '#991b1b'
    bgRed900?: boolean // '#7f1d1d'

    bgTrueGray50?: boolean // '#fafafa'
    bgTrueGray100?: boolean // '#f5f5f5'
    bgTrueGray200?: boolean // '#e5e5e5'
    bgTrueGray300?: boolean // '#d4d4d4'
    bgTrueGray400?: boolean // '#a3a3a3'
    bgTrueGray500?: boolean // '#737373'
    bgTrueGray600?: boolean // '#525252'
    bgTrueGray700?: boolean // '#404040'
    bgTrueGray800?: boolean // '#262626'
    bgTrueGray900?: boolean // '#171717'

    bgGray50?: boolean // '#fafafa'
    bgGray100?: boolean // '#f4f4f5'
    bgGray200?: boolean // '#e4e4e7'
    bgGray300?: boolean // '#d4d4d8'
    bgGray400?: boolean // '#a1a1aa'
    bgGray500?: boolean // '#71717a'
    bgGray600?: boolean // '#52525b'
    bgGray700?: boolean // '#3f3f46'
    bgGray800?: boolean // '#27272a'
    bgGray900?: boolean // '#18181b'
  }
}
