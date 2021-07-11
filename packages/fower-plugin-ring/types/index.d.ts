import { FowerPlugin } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set ring
     *
     * @example
     * ```tsx
     * <Box ring-10></Box>
     * <Box ring={10}></Box>
     * <Box ring="10"></Box>
     * ```
     */
    ring?: boolean | string | number

    ringTransparent?: boolean
    ringBlack?: boolean
    ringWhite?: boolean

    ringBrand?: boolean
    ringBrand50?: boolean
    ringBrand100?: boolean
    ringBrand200?: boolean
    ringBrand300?: boolean
    ringBrand400?: boolean
    ringBrand500?: boolean
    ringBrand600?: boolean
    ringBrand700?: boolean
    ringBrand800?: boolean
    ringBrand900?: boolean

    ringRose50?: boolean // '#fff1f2'
    ringRose100?: boolean // '#ffe4e6'
    ringRose200?: boolean // '#fecdd3'
    ringRose300?: boolean // '#fda4af'
    ringRose400?: boolean // '#fb7185'
    ringRose500?: boolean // '#f43f5e'
    ringRose600?: boolean // '#e11d48'
    ringRose700?: boolean // '#be123c'
    ringRose800?: boolean // '#9f1239'
    ringRose900?: boolean // '#881337'

    ringPink50?: boolean // '#fdf2f8'
    ringPink100?: boolean // '#fce7f3'
    ringPink200?: boolean // '#fbcfe8'
    ringPink300?: boolean // '#f9a8d4'
    ringPink400?: boolean // '#f472b6'
    ringPink500?: boolean // '#ec4899'
    ringPink600?: boolean // '#db2777'
    ringPink700?: boolean // '#be185d'
    ringPink800?: boolean // '#9d174d'
    ringPink900?: boolean // '#831843'

    ringFuchsia50?: boolean // '#fdf4ff'
    ringFuchsia100?: boolean // '#fae8ff'
    ringFuchsia200?: boolean // '#f5d0fe'
    ringFuchsia300?: boolean // '#f0abfc'
    ringFuchsia400?: boolean // '#e879f9'
    ringFuchsia500?: boolean // '#d946ef'
    ringFuchsia600?: boolean // '#c026d3'
    ringFuchsia700?: boolean // '#a21caf'
    ringFuchsia800?: boolean // '#86198f'
    ringFuchsia900?: boolean // '#701a75'

    ringPurple50?: boolean // '#faf5ff'
    ringPurple100?: boolean // '#f3e8ff'
    ringPurple200?: boolean // '#e9d5ff'
    ringPurple300?: boolean // '#d8b4fe'
    ringPurple400?: boolean // '#c084fc'
    ringPurple500?: boolean // '#a855f7'
    ringPurple600?: boolean // '#9333ea'
    ringPurple700?: boolean // '#7e22ce'
    ringPurple800?: boolean // '#6b21a8'
    ringPurple900?: boolean // '#581c87'

    ringViolet50?: boolean // '#f5f3ff'
    ringViolet100?: boolean // '#ede9fe'
    ringViolet200?: boolean // '#ddd6fe'
    ringViolet300?: boolean // '#c4b5fd'
    ringViolet400?: boolean // '#a78bfa'
    ringViolet500?: boolean // '#8b5cf6'
    ringViolet600?: boolean // '#7c3aed'
    ringViolet700?: boolean // '#6d28d9'
    ringViolet800?: boolean // '#5b21b6'
    ringViolet900?: boolean // '#4c1d95'

    ringIndigo50?: boolean // '#eef2ff'
    ringIndigo100?: boolean // '#e0e7ff'
    ringIndigo200?: boolean // '#c7d2fe'
    ringIndigo300?: boolean // '#a5b4fc'
    ringIndigo400?: boolean // '#818cf8'
    ringIndigo500?: boolean // '#6366f1'
    ringIndigo600?: boolean // '#4f46e5'
    ringIndigo700?: boolean // '#4338ca'
    ringIndigo800?: boolean // '#3730a3'
    ringIndigo900?: boolean // '#312e81'

    ringBlue50?: boolean // '#eff6ff'
    ringBlue100?: boolean // '#dbeafe'
    ringBlue200?: boolean // '#bfdbfe'
    ringBlue300?: boolean // '#93c5fd'
    ringBlue400?: boolean // '#60a5fa'
    ringBlue500?: boolean // '#3b82f6'
    ringBlue600?: boolean // '#2563eb'
    ringBlue700?: boolean // '#1d4ed8'
    ringBlue800?: boolean // '#1e40af'
    ringBlue900?: boolean // '#1e3a8a'

    ringCyan50?: boolean // '#ecfeff'
    ringCyan100?: boolean // '#cffafe'
    ringCyan200?: boolean // '#a5f3fc'
    ringCyan300?: boolean // '#67e8f9'
    ringCyan400?: boolean // '#22d3ee'
    ringCyan500?: boolean // '#06b6d4'
    ringCyan600?: boolean // '#0891b2'
    ringCyan700?: boolean // '#0e7490'
    ringCyan800?: boolean // '#155e75'
    ringCyan900?: boolean // '#164e63'

    ringTeal50?: boolean // '#f0fdfa'
    ringTeal100?: boolean // '#ccfbf1'
    ringTeal200?: boolean // '#99f6e4'
    ringTeal300?: boolean // '#5eead4'
    ringTeal400?: boolean // '#2dd4bf'
    ringTeal500?: boolean // '#14b8a6'
    ringTeal600?: boolean // '#0d9488'
    ringTeal700?: boolean // '#0f766e'
    ringTeal800?: boolean // '#115e59'
    ringTeal900?: boolean // '#134e4a'

    ringGreen50?: boolean // '#f0fdf4'
    ringGreen100?: boolean // '#dcfce7'
    ringGreen200?: boolean // '#bbf7d0'
    ringGreen300?: boolean // '#86efac'
    ringGreen400?: boolean // '#4ade80'
    ringGreen500?: boolean // '#22c55e'
    ringGreen600?: boolean // '#16a34a'
    ringGreen700?: boolean // '#15803d'
    ringGreen800?: boolean // '#166534'
    ringGreen900?: boolean // '#14532d'

    ringLime50?: boolean // '#f7fee7'
    ringLime100?: boolean // '#ecfccb'
    ringLime200?: boolean // '#d9f99d'
    ringLime300?: boolean // '#bef264'
    ringLime400?: boolean // '#a3e635'
    ringLime500?: boolean // '#84cc16'
    ringLime600?: boolean // '#65a30d'
    ringLime700?: boolean // '#4d7c0f'
    ringLime800?: boolean // '#3f6212'
    ringLime900?: boolean // '#365314'

    ringYellow50?: boolean // '#fefce8'
    ringYellow100?: boolean // '#fef9c3'
    ringYellow200?: boolean // '#fef08a'
    ringYellow300?: boolean // '#fde047'
    ringYellow400?: boolean // '#facc15'
    ringYellow500?: boolean // '#eab308'
    ringYellow600?: boolean // '#ca8a04'
    ringYellow700?: boolean // '#a16207'
    ringYellow800?: boolean // '#854d0e'
    ringYellow900?: boolean // '#713f12'

    ringOrange50?: boolean // '#fff7ed'
    ringOrange100?: boolean // '#ffedd5'
    ringOrange200?: boolean // '#fed7aa'
    ringOrange300?: boolean // '#fdba74'
    ringOrange400?: boolean // '#fb923c'
    ringOrange500?: boolean // '#f97316'
    ringOrange600?: boolean // '#ea580c'
    ringOrange700?: boolean // '#c2410c'
    ringOrange800?: boolean // '#9a3412'
    ringOrange900?: boolean // '#7c2d12'

    ringRed50?: boolean // '#fef2f2'
    ringRed100?: boolean // '#fee2e2'
    ringRed200?: boolean // '#fecaca'
    ringRed300?: boolean // '#fca5a5'
    ringRed400?: boolean // '#f87171'
    ringRed500?: boolean // '#ef4444'
    ringRed600?: boolean // '#dc2626'
    ringRed700?: boolean // '#b91c1c'
    ringRed800?: boolean // '#991b1b'
    ringRed900?: boolean // '#7f1d1d'

    ringTrueGray50?: boolean // '#fafafa'
    ringTrueGray100?: boolean // '#f5f5f5'
    ringTrueGray200?: boolean // '#e5e5e5'
    ringTrueGray300?: boolean // '#d4d4d4'
    ringTrueGray400?: boolean // '#a3a3a3'
    ringTrueGray500?: boolean // '#737373'
    ringTrueGray600?: boolean // '#525252'
    ringTrueGray700?: boolean // '#404040'
    ringTrueGray800?: boolean // '#262626'
    ringTrueGray900?: boolean // '#171717'

    ringGray50?: boolean // '#fafafa'
    ringGray100?: boolean // '#f4f4f5'
    ringGray200?: boolean // '#e4e4e7'
    ringGray300?: boolean // '#d4d4d8'
    ringGray400?: boolean // '#a1a1aa'
    ringGray500?: boolean // '#71717a'
    ringGray600?: boolean // '#52525b'
    ringGray700?: boolean // '#3f3f46'
    ringGray800?: boolean // '#27272a'
    ringGray900?: boolean // '#18181b'
  }
}
