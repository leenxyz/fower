import { StyliPlugin } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set border
     *
     * @example
     * ```tsx
     * <Box border-10></Box>
     * <Box border={10}></Box>
     * <Box border="10"></Box>
     * ```
     */
    border?: boolean | string | number

    /**
     * Set borderTop
     *
     * @example
     * ```tsx
     * <Box borderT-10></Box>
     * <Box borderT={10}></Box>
     * ```
     */
    borderT?: boolean | number | string

    /**
     * Set borderRight
     *
     * @example
     * ```tsx
     * <Box borderR-10></Box>
     * <Box borderR={10}></Box>
     * ```
     */
    borderR?: boolean | number | string

    /**
     * Set borderBottom
     *
     * @example
     * ```tsx
     * <Box borderB-10></Box>
     * <Box borderB={10}></Box>
     * ```
     */
    borderB?: boolean | number | string

    /**
     * Set borderLeft
     *
     * @example
     * ```tsx
     * <Box borderL-10></Box>
     * <Box borderL={10}></Box>
     * ```
     */
    borderL?: boolean | number | string

    /**
     * Set borderStyle
     *
     * @example
     * ```tsx
     * <Box borderStyle="none"></Box>
     * ```
     */
    borderStyle?: CSS.Property.BorderStyle | boolean

    /**
     * Set borderStyle to solid
     *
     * borderSolid is `border-style: solid;`
     *
     * @example
     * ```tsx
     * <Box borderSolid></Box>
     * ```
     */
    borderSolid?: boolean

    /**
     * Set borderStyle to dashed
     *
     * borderDashed is `border-style: dashed;`
     *
     * @example
     * ```tsx
     * <Box borderDashed></Box>
     * ```
     */
    borderDashed?: boolean

    /**
     * Set borderStyle to dotted
     *
     * borderDotted is `border-style: dotted;`
     *
     * @example
     * ```tsx
     * <Box borderDotted></Box>
     * ```
     */
    borderDotted?: boolean

    /**
     * Set borderStyle to double
     *
     * borderDouble is `border-style: double;`
     *
     * @example
     * ```tsx
     * <Box borderDouble></Box>
     * ```
     */
    borderDouble?: boolean

    /**
     * Set borderStyle to none
     *
     * borderNone is `border-style: none;`
     *
     * @example
     * ```tsx
     * <Box borderNone></Box>
     * ```
     */
    borderNone?: boolean

    /**
     * Set borderColor
     *
     * @example
     * ```tsx
     * <Box borderColor="gray20"></Box>
     * ```
     */
    borderColor?: StyliColor | boolean

    borderBlack?: boolean

    borderWhite?: boolean

    borderRose50?: boolean // '#fff1f2'
    borderRose100?: boolean // '#ffe4e6'
    borderRose200?: boolean // '#fecdd3'
    borderRose300?: boolean // '#fda4af'
    borderRose400?: boolean // '#fb7185'
    borderRose500?: boolean // '#f43f5e'
    borderRose600?: boolean // '#e11d48'
    borderRose700?: boolean // '#be123c'
    borderRose800?: boolean // '#9f1239'
    borderRose900?: boolean // '#881337'

    borderPink50?: boolean // '#fdf2f8'
    borderPink100?: boolean // '#fce7f3'
    borderPink200?: boolean // '#fbcfe8'
    borderPink300?: boolean // '#f9a8d4'
    borderPink400?: boolean // '#f472b6'
    borderPink500?: boolean // '#ec4899'
    borderPink600?: boolean // '#db2777'
    borderPink700?: boolean // '#be185d'
    borderPink800?: boolean // '#9d174d'
    borderPink900?: boolean // '#831843'

    borderFuchsia50?: boolean // '#fdf4ff'
    borderFuchsia100?: boolean // '#fae8ff'
    borderFuchsia200?: boolean // '#f5d0fe'
    borderFuchsia300?: boolean // '#f0abfc'
    borderFuchsia400?: boolean // '#e879f9'
    borderFuchsia500?: boolean // '#d946ef'
    borderFuchsia600?: boolean // '#c026d3'
    borderFuchsia700?: boolean // '#a21caf'
    borderFuchsia800?: boolean // '#86198f'
    borderFuchsia900?: boolean // '#701a75'

    borderPurple50?: boolean // '#faf5ff'
    borderPurple100?: boolean // '#f3e8ff'
    borderPurple200?: boolean // '#e9d5ff'
    borderPurple300?: boolean // '#d8b4fe'
    borderPurple400?: boolean // '#c084fc'
    borderPurple500?: boolean // '#a855f7'
    borderPurple600?: boolean // '#9333ea'
    borderPurple700?: boolean // '#7e22ce'
    borderPurple800?: boolean // '#6b21a8'
    borderPurple900?: boolean // '#581c87'

    borderViolet50?: boolean // '#f5f3ff'
    borderViolet100?: boolean // '#ede9fe'
    borderViolet200?: boolean // '#ddd6fe'
    borderViolet300?: boolean // '#c4b5fd'
    borderViolet400?: boolean // '#a78bfa'
    borderViolet500?: boolean // '#8b5cf6'
    borderViolet600?: boolean // '#7c3aed'
    borderViolet700?: boolean // '#6d28d9'
    borderViolet800?: boolean // '#5b21b6'
    borderViolet900?: boolean // '#4c1d95'

    borderIndigo50?: boolean // '#eef2ff'
    borderIndigo100?: boolean // '#e0e7ff'
    borderIndigo200?: boolean // '#c7d2fe'
    borderIndigo300?: boolean // '#a5b4fc'
    borderIndigo400?: boolean // '#818cf8'
    borderIndigo500?: boolean // '#6366f1'
    borderIndigo600?: boolean // '#4f46e5'
    borderIndigo700?: boolean // '#4338ca'
    borderIndigo800?: boolean // '#3730a3'
    borderIndigo900?: boolean // '#312e81'

    borderBlue50?: boolean // '#eff6ff'
    borderBlue100?: boolean // '#dbeafe'
    borderBlue200?: boolean // '#bfdbfe'
    borderBlue300?: boolean // '#93c5fd'
    borderBlue400?: boolean // '#60a5fa'
    borderBlue500?: boolean // '#3b82f6'
    borderBlue600?: boolean // '#2563eb'
    borderBlue700?: boolean // '#1d4ed8'
    borderBlue800?: boolean // '#1e40af'
    borderBlue900?: boolean // '#1e3a8a'

    borderLightBlue50?: boolean // '#f0f9ff'
    borderLightBlue100?: boolean // '#e0f2fe'
    borderLightBlue200?: boolean // '#bae6fd'
    borderLightBlue300?: boolean // '#7dd3fc'
    borderLightBlue400?: boolean // '#38bdf8'
    borderLightBlue500?: boolean // '#0ea5e9'
    borderLightBlue600?: boolean // '#0284c7'
    borderLightBlue700?: boolean // '#0369a1'
    borderLightBlue800?: boolean // '#075985'
    borderLightBlue900?: boolean // '#0c4a6e'

    borderCyan50?: boolean // '#ecfeff'
    borderCyan100?: boolean // '#cffafe'
    borderCyan200?: boolean // '#a5f3fc'
    borderCyan300?: boolean // '#67e8f9'
    borderCyan400?: boolean // '#22d3ee'
    borderCyan500?: boolean // '#06b6d4'
    borderCyan600?: boolean // '#0891b2'
    borderCyan700?: boolean // '#0e7490'
    borderCyan800?: boolean // '#155e75'
    borderCyan900?: boolean // '#164e63'

    borderTeal50?: boolean // '#f0fdfa'
    borderTeal100?: boolean // '#ccfbf1'
    borderTeal200?: boolean // '#99f6e4'
    borderTeal300?: boolean // '#5eead4'
    borderTeal400?: boolean // '#2dd4bf'
    borderTeal500?: boolean // '#14b8a6'
    borderTeal600?: boolean // '#0d9488'
    borderTeal700?: boolean // '#0f766e'
    borderTeal800?: boolean // '#115e59'
    borderTeal900?: boolean // '#134e4a'

    borderEmerald50?: boolean // '#ecfdf5'
    borderEmerald100?: boolean // '#d1fae5'
    borderEmerald200?: boolean // '#a7f3d0'
    borderEmerald300?: boolean // '#6ee7b7'
    borderEmerald400?: boolean // '#34d399'
    borderEmerald500?: boolean // '#10b981'
    borderEmerald600?: boolean // '#059669'
    borderEmerald700?: boolean // '#047857'
    borderEmerald800?: boolean // '#065f46'
    borderEmerald900?: boolean // '#064e3b'

    borderGreen50?: boolean // '#f0fdf4'
    borderGreen100?: boolean // '#dcfce7'
    borderGreen200?: boolean // '#bbf7d0'
    borderGreen300?: boolean // '#86efac'
    borderGreen400?: boolean // '#4ade80'
    borderGreen500?: boolean // '#22c55e'
    borderGreen600?: boolean // '#16a34a'
    borderGreen700?: boolean // '#15803d'
    borderGreen800?: boolean // '#166534'
    borderGreen900?: boolean // '#14532d'

    borderLime50?: boolean // '#f7fee7'
    borderLime100?: boolean // '#ecfccb'
    borderLime200?: boolean // '#d9f99d'
    borderLime300?: boolean // '#bef264'
    borderLime400?: boolean // '#a3e635'
    borderLime500?: boolean // '#84cc16'
    borderLime600?: boolean // '#65a30d'
    borderLime700?: boolean // '#4d7c0f'
    borderLime800?: boolean // '#3f6212'
    borderLime900?: boolean // '#365314'

    borderYellow50?: boolean // '#fefce8'
    borderYellow100?: boolean // '#fef9c3'
    borderYellow200?: boolean // '#fef08a'
    borderYellow300?: boolean // '#fde047'
    borderYellow400?: boolean // '#facc15'
    borderYellow500?: boolean // '#eab308'
    borderYellow600?: boolean // '#ca8a04'
    borderYellow700?: boolean // '#a16207'
    borderYellow800?: boolean // '#854d0e'
    borderYellow900?: boolean // '#713f12'

    borderAmber50?: boolean // '#fffbeb'
    borderAmber100?: boolean // '#fef3c7'
    borderAmber200?: boolean // '#fde68a'
    borderAmber300?: boolean // '#fcd34d'
    borderAmber400?: boolean // '#fbbf24'
    borderAmber500?: boolean // '#f59e0b'
    borderAmber600?: boolean // '#d97706'
    borderAmber700?: boolean // '#b45309'
    borderAmber800?: boolean // '#92400e'
    borderAmber900?: boolean // '#78350f'

    borderOrange50?: boolean // '#fff7ed'
    borderOrange100?: boolean // '#ffedd5'
    borderOrange200?: boolean // '#fed7aa'
    borderOrange300?: boolean // '#fdba74'
    borderOrange400?: boolean // '#fb923c'
    borderOrange500?: boolean // '#f97316'
    borderOrange600?: boolean // '#ea580c'
    borderOrange700?: boolean // '#c2410c'
    borderOrange800?: boolean // '#9a3412'
    borderOrange900?: boolean // '#7c2d12'

    borderRed50?: boolean // '#fef2f2'
    borderRed100?: boolean // '#fee2e2'
    borderRed200?: boolean // '#fecaca'
    borderRed300?: boolean // '#fca5a5'
    borderRed400?: boolean // '#f87171'
    borderRed500?: boolean // '#ef4444'
    borderRed600?: boolean // '#dc2626'
    borderRed700?: boolean // '#b91c1c'
    borderRed800?: boolean // '#991b1b'
    borderRed900?: boolean // '#7f1d1d'

    borderWarmGray50?: boolean // '#fafaf9'
    borderWarmGray100?: boolean // '#f5f5f4'
    borderWarmGray200?: boolean // '#e7e5e4'
    borderWarmGray300?: boolean // '#d6d3d1'
    borderWarmGray400?: boolean // '#a8a29e'
    borderWarmGray500?: boolean // '#78716c'
    borderWarmGray600?: boolean // '#57534e'
    borderWarmGray700?: boolean // '#44403c'
    borderWarmGray800?: boolean // '#292524'
    borderWarmGray900?: boolean // '#1c1917'

    borderTrueGray50?: boolean // '#fafafa'
    borderTrueGray100?: boolean // '#f5f5f5'
    borderTrueGray200?: boolean // '#e5e5e5'
    borderTrueGray300?: boolean // '#d4d4d4'
    borderTrueGray400?: boolean // '#a3a3a3'
    borderTrueGray500?: boolean // '#737373'
    borderTrueGray600?: boolean // '#525252'
    borderTrueGray700?: boolean // '#404040'
    borderTrueGray800?: boolean // '#262626'
    borderTrueGray900?: boolean // '#171717'

    borderGray50?: boolean // '#fafafa'
    borderGray100?: boolean // '#f4f4f5'
    borderGray200?: boolean // '#e4e4e7'
    borderGray300?: boolean // '#d4d4d8'
    borderGray400?: boolean // '#a1a1aa'
    borderGray500?: boolean // '#71717a'
    borderGray600?: boolean // '#52525b'
    borderGray700?: boolean // '#3f3f46'
    borderGray800?: boolean // '#27272a'
    borderGray900?: boolean // '#18181b'

    borderCoolGray50?: boolean // '#f9fafb'
    borderCoolGray100?: boolean // '#f3f4f6'
    borderCoolGray200?: boolean // '#e5e7eb'
    borderCoolGray300?: boolean // '#d1d5db'
    borderCoolGray400?: boolean // '#9ca3af'
    borderCoolGray500?: boolean // '#6b7280'
    borderCoolGray600?: boolean // '#4b5563'
    borderCoolGray700?: boolean // '#374151'
    borderCoolGray800?: boolean // '#1f2937'
    borderCoolGray900?: boolean // '#111827'

    borderBlueGray50?: boolean // '#f8fafc'
    borderBlueGray100?: boolean // '#f1f5f9'
    borderBlueGray200?: boolean // '#e2e8f0'
    borderBlueGray300?: boolean // '#cbd5e1'
    borderBlueGray400?: boolean // '#94a3b8'
    borderBlueGray500?: boolean // '#64748b'
    borderBlueGray600?: boolean // '#475569'
    borderBlueGray700?: boolean // '#334155'
    borderBlueGray800?: boolean // '#1e293b'
    borderBlueGray900?: boolean // '#0f172a'
  }
}
