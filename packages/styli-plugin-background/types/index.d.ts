import { StyliPlugin, Theme, StyliColor } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
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
    bg?: StyliColor | boolean

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
    backgroundSize?: string | boolean

    /**
     * Set backgroundRepeat
     *
     * @example
     * ```tsx
     * <Box backgroundRepeat="no-repeat"></Box>
     * ```
     */
    backgroundRepeat?: CSS.Property.BackgroundRepeat | boolean

    bgTransparent?: boolean
    bgBlack?: boolean
    bgWhite?: boolean

    bgRose50?: boolean // '#fff1f2'
    bgRose100?: boolean // '#ffe4e6'
    bgRose200?: boolean // '#fecdd3'
    bgRose300?: boolean // '#fda4af'
    bgRose400?: boolean // '#fb7185'
    bgRose500?: boolean // '#f43f5e'
    bgRose600?: boolean // '#e11d48'
    bgRose700?: boolean // '#be123c'
    bgRose800?: boolean // '#9f1239'
    bgRose900?: boolean // '#881337'

    bgPink50?: boolean // '#fdf2f8'
    bgPink100?: boolean // '#fce7f3'
    bgPink200?: boolean // '#fbcfe8'
    bgPink300?: boolean // '#f9a8d4'
    bgPink400?: boolean // '#f472b6'
    bgPink500?: boolean // '#ec4899'
    bgPink600?: boolean // '#db2777'
    bgPink700?: boolean // '#be185d'
    bgPink800?: boolean // '#9d174d'
    bgPink900?: boolean // '#831843'

    bgFuchsia50?: boolean // '#fdf4ff'
    bgFuchsia100?: boolean // '#fae8ff'
    bgFuchsia200?: boolean // '#f5d0fe'
    bgFuchsia300?: boolean // '#f0abfc'
    bgFuchsia400?: boolean // '#e879f9'
    bgFuchsia500?: boolean // '#d946ef'
    bgFuchsia600?: boolean // '#c026d3'
    bgFuchsia700?: boolean // '#a21caf'
    bgFuchsia800?: boolean // '#86198f'
    bgFuchsia900?: boolean // '#701a75'

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

    bgLightBlue50?: boolean // '#f0f9ff'
    bgLightBlue100?: boolean // '#e0f2fe'
    bgLightBlue200?: boolean // '#bae6fd'
    bgLightBlue300?: boolean // '#7dd3fc'
    bgLightBlue400?: boolean // '#38bdf8'
    bgLightBlue500?: boolean // '#0ea5e9'
    bgLightBlue600?: boolean // '#0284c7'
    bgLightBlue700?: boolean // '#0369a1'
    bgLightBlue800?: boolean // '#075985'
    bgLightBlue900?: boolean // '#0c4a6e'

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

    bgEmerald50?: boolean // '#ecfdf5'
    bgEmerald100?: boolean // '#d1fae5'
    bgEmerald200?: boolean // '#a7f3d0'
    bgEmerald300?: boolean // '#6ee7b7'
    bgEmerald400?: boolean // '#34d399'
    bgEmerald500?: boolean // '#10b981'
    bgEmerald600?: boolean // '#059669'
    bgEmerald700?: boolean // '#047857'
    bgEmerald800?: boolean // '#065f46'
    bgEmerald900?: boolean // '#064e3b'

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

    bgAmber50?: boolean // '#fffbeb'
    bgAmber100?: boolean // '#fef3c7'
    bgAmber200?: boolean // '#fde68a'
    bgAmber300?: boolean // '#fcd34d'
    bgAmber400?: boolean // '#fbbf24'
    bgAmber500?: boolean // '#f59e0b'
    bgAmber600?: boolean // '#d97706'
    bgAmber700?: boolean // '#b45309'
    bgAmber800?: boolean // '#92400e'
    bgAmber900?: boolean // '#78350f'

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

    bgWarmGray50?: boolean // '#fafaf9'
    bgWarmGray100?: boolean // '#f5f5f4'
    bgWarmGray200?: boolean // '#e7e5e4'
    bgWarmGray300?: boolean // '#d6d3d1'
    bgWarmGray400?: boolean // '#a8a29e'
    bgWarmGray500?: boolean // '#78716c'
    bgWarmGray600?: boolean // '#57534e'
    bgWarmGray700?: boolean // '#44403c'
    bgWarmGray800?: boolean // '#292524'
    bgWarmGray900?: boolean // '#1c1917'

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

    bgCoolGray50?: boolean // '#f9fafb'
    bgCoolGray100?: boolean // '#f3f4f6'
    bgCoolGray200?: boolean // '#e5e7eb'
    bgCoolGray300?: boolean // '#d1d5db'
    bgCoolGray400?: boolean // '#9ca3af'
    bgCoolGray500?: boolean // '#6b7280'
    bgCoolGray600?: boolean // '#4b5563'
    bgCoolGray700?: boolean // '#374151'
    bgCoolGray800?: boolean // '#1f2937'
    bgCoolGray900?: boolean // '#111827'

    bgBlueGray50?: boolean // '#f8fafc'
    bgBlueGray100?: boolean // '#f1f5f9'
    bgBlueGray200?: boolean // '#e2e8f0'
    bgBlueGray300?: boolean // '#cbd5e1'
    bgBlueGray400?: boolean // '#94a3b8'
    bgBlueGray500?: boolean // '#64748b'
    bgBlueGray600?: boolean // '#475569'
    bgBlueGray700?: boolean // '#334155'
    bgBlueGray800?: boolean // '#1e293b'
    bgBlueGray900?: boolean // '#0f172a'
  }
}
