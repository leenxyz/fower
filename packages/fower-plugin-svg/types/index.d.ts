import { FowerPlugin } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    fillNone?: boolean

    fillCurrent?: boolean

    strokeCurrent?: boolean

    stroke?: boolean

    fillBlack?: boolean
    fillWhite?: boolean

    fillBrand?: boolean
    fillBrand50?: boolean
    fillBrand100?: boolean
    fillBrand200?: boolean
    fillBrand300?: boolean
    fillBrand400?: boolean
    fillBrand500?: boolean
    fillBrand600?: boolean
    fillBrand700?: boolean
    fillBrand800?: boolean
    fillBrand900?: boolean

    fillRose50?: boolean // '#fff1f2'
    fillRose100?: boolean // '#ffe4e6'
    fillRose200?: boolean // '#fecdd3'
    fillRose300?: boolean // '#fda4af'
    fillRose400?: boolean // '#fb7185'
    fillRose500?: boolean // '#f43f5e'
    fillRose600?: boolean // '#e11d48'
    fillRose700?: boolean // '#be123c'
    fillRose800?: boolean // '#9f1239'
    fillRose900?: boolean // '#881337'

    fillPink50?: boolean // '#fdf2f8'
    fillPink100?: boolean // '#fce7f3'
    fillPink200?: boolean // '#fbcfe8'
    fillPink300?: boolean // '#f9a8d4'
    fillPink400?: boolean // '#f472b6'
    fillPink500?: boolean // '#ec4899'
    fillPink600?: boolean // '#db2777'
    fillPink700?: boolean // '#be185d'
    fillPink800?: boolean // '#9d174d'
    fillPink900?: boolean // '#831843'

    fillFuchsia50?: boolean // '#fdf4ff'
    fillFuchsia100?: boolean // '#fae8ff'
    fillFuchsia200?: boolean // '#f5d0fe'
    fillFuchsia300?: boolean // '#f0abfc'
    fillFuchsia400?: boolean // '#e879f9'
    fillFuchsia500?: boolean // '#d946ef'
    fillFuchsia600?: boolean // '#c026d3'
    fillFuchsia700?: boolean // '#a21caf'
    fillFuchsia800?: boolean // '#86198f'
    fillFuchsia900?: boolean // '#701a75'

    fillPurple50?: boolean // '#faf5ff'
    fillPurple100?: boolean // '#f3e8ff'
    fillPurple200?: boolean // '#e9d5ff'
    fillPurple300?: boolean // '#d8b4fe'
    fillPurple400?: boolean // '#c084fc'
    fillPurple500?: boolean // '#a855f7'
    fillPurple600?: boolean // '#9333ea'
    fillPurple700?: boolean // '#7e22ce'
    fillPurple800?: boolean // '#6b21a8'
    fillPurple900?: boolean // '#581c87'

    fillViolet50?: boolean // '#f5f3ff'
    fillViolet100?: boolean // '#ede9fe'
    fillViolet200?: boolean // '#ddd6fe'
    fillViolet300?: boolean // '#c4b5fd'
    fillViolet400?: boolean // '#a78bfa'
    fillViolet500?: boolean // '#8b5cf6'
    fillViolet600?: boolean // '#7c3aed'
    fillViolet700?: boolean // '#6d28d9'
    fillViolet800?: boolean // '#5b21b6'
    fillViolet900?: boolean // '#4c1d95'

    fillIndigo50?: boolean // '#eef2ff'
    fillIndigo100?: boolean // '#e0e7ff'
    fillIndigo200?: boolean // '#c7d2fe'
    fillIndigo300?: boolean // '#a5b4fc'
    fillIndigo400?: boolean // '#818cf8'
    fillIndigo500?: boolean // '#6366f1'
    fillIndigo600?: boolean // '#4f46e5'
    fillIndigo700?: boolean // '#4338ca'
    fillIndigo800?: boolean // '#3730a3'
    fillIndigo900?: boolean // '#312e81'

    fillBlue50?: boolean // '#eff6ff'
    fillBlue100?: boolean // '#dbeafe'
    fillBlue200?: boolean // '#bfdbfe'
    fillBlue300?: boolean // '#93c5fd'
    fillBlue400?: boolean // '#60a5fa'
    fillBlue500?: boolean // '#3b82f6'
    fillBlue600?: boolean // '#2563eb'
    fillBlue700?: boolean // '#1d4ed8'
    fillBlue800?: boolean // '#1e40af'
    fillBlue900?: boolean // '#1e3a8a'

    fillCyan50?: boolean // '#ecfeff'
    fillCyan100?: boolean // '#cffafe'
    fillCyan200?: boolean // '#a5f3fc'
    fillCyan300?: boolean // '#67e8f9'
    fillCyan400?: boolean // '#22d3ee'
    fillCyan500?: boolean // '#06b6d4'
    fillCyan600?: boolean // '#0891b2'
    fillCyan700?: boolean // '#0e7490'
    fillCyan800?: boolean // '#155e75'
    fillCyan900?: boolean // '#164e63'

    fillTeal50?: boolean // '#f0fdfa'
    fillTeal100?: boolean // '#ccfbf1'
    fillTeal200?: boolean // '#99f6e4'
    fillTeal300?: boolean // '#5eead4'
    fillTeal400?: boolean // '#2dd4bf'
    fillTeal500?: boolean // '#14b8a6'
    fillTeal600?: boolean // '#0d9488'
    fillTeal700?: boolean // '#0f766e'
    fillTeal800?: boolean // '#115e59'
    fillTeal900?: boolean // '#134e4a'

    fillGreen50?: boolean // '#f0fdf4'
    fillGreen100?: boolean // '#dcfce7'
    fillGreen200?: boolean // '#bbf7d0'
    fillGreen300?: boolean // '#86efac'
    fillGreen400?: boolean // '#4ade80'
    fillGreen500?: boolean // '#22c55e'
    fillGreen600?: boolean // '#16a34a'
    fillGreen700?: boolean // '#15803d'
    fillGreen800?: boolean // '#166534'
    fillGreen900?: boolean // '#14532d'

    fillLime50?: boolean // '#f7fee7'
    fillLime100?: boolean // '#ecfccb'
    fillLime200?: boolean // '#d9f99d'
    fillLime300?: boolean // '#bef264'
    fillLime400?: boolean // '#a3e635'
    fillLime500?: boolean // '#84cc16'
    fillLime600?: boolean // '#65a30d'
    fillLime700?: boolean // '#4d7c0f'
    fillLime800?: boolean // '#3f6212'
    fillLime900?: boolean // '#365314'

    fillYellow50?: boolean // '#fefce8'
    fillYellow100?: boolean // '#fef9c3'
    fillYellow200?: boolean // '#fef08a'
    fillYellow300?: boolean // '#fde047'
    fillYellow400?: boolean // '#facc15'
    fillYellow500?: boolean // '#eab308'
    fillYellow600?: boolean // '#ca8a04'
    fillYellow700?: boolean // '#a16207'
    fillYellow800?: boolean // '#854d0e'
    fillYellow900?: boolean // '#713f12'

    fillOrange50?: boolean // '#fff7ed'
    fillOrange100?: boolean // '#ffedd5'
    fillOrange200?: boolean // '#fed7aa'
    fillOrange300?: boolean // '#fdba74'
    fillOrange400?: boolean // '#fb923c'
    fillOrange500?: boolean // '#f97316'
    fillOrange600?: boolean // '#ea580c'
    fillOrange700?: boolean // '#c2410c'
    fillOrange800?: boolean // '#9a3412'
    fillOrange900?: boolean // '#7c2d12'

    fillRed50?: boolean // '#fef2f2'
    fillRed100?: boolean // '#fee2e2'
    fillRed200?: boolean // '#fecaca'
    fillRed300?: boolean // '#fca5a5'
    fillRed400?: boolean // '#f87171'
    fillRed500?: boolean // '#ef4444'
    fillRed600?: boolean // '#dc2626'
    fillRed700?: boolean // '#b91c1c'
    fillRed800?: boolean // '#991b1b'
    fillRed900?: boolean // '#7f1d1d'

    fillTrueGray50?: boolean // '#fafafa'
    fillTrueGray100?: boolean // '#f5f5f5'
    fillTrueGray200?: boolean // '#e5e5e5'
    fillTrueGray300?: boolean // '#d4d4d4'
    fillTrueGray400?: boolean // '#a3a3a3'
    fillTrueGray500?: boolean // '#737373'
    fillTrueGray600?: boolean // '#525252'
    fillTrueGray700?: boolean // '#404040'
    fillTrueGray800?: boolean // '#262626'
    fillTrueGray900?: boolean // '#171717'

    fillGray50?: boolean // '#fafafa'
    fillGray100?: boolean // '#f4f4f5'
    fillGray200?: boolean // '#e4e4e7'
    fillGray300?: boolean // '#d4d4d8'
    fillGray400?: boolean // '#a1a1aa'
    fillGray500?: boolean // '#71717a'
    fillGray600?: boolean // '#52525b'
    fillGray700?: boolean // '#3f3f46'
    fillGray800?: boolean // '#27272a'
    fillGray900?: boolean // '#18181b'
  }
}
