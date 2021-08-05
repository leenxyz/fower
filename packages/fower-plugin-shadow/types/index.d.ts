import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set box shadow
     * ```css
     * { box-shadow: $value;}
     * ```
     * @example
     * ```tsx
     * <Box shadow></Box>
     * <Box shadow="0 0 0 1px rgba(0, 0, 0, 0.05)"></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadow?: ResponsiveValue<string | boolean>
    /**
     * set box shadow to tiny
     * ```css
     * { box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0,0,0,0.01);}
     * ```
     * @example
     * ```tsx
     * <Box shadowTiny></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowTiny?: ResponsiveBoolean
    /**
     * set box shadow to small
     * ```css
     * { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02);}
     * ```
     * @example
     * ```tsx
     * <Box shadowSmall></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowSmall?: ResponsiveBoolean
    /**
     * set box shadow to medium
     * ```css
     * { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02);}
     * ```
     * @example
     * ```tsx
     * <Box shadowMedium></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowMedium?: ResponsiveBoolean
    /**
     * set box shadow to large
     * ```css
     * { box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02);}
     * ```
     * @example
     * ```tsx
     * <Box shadowLarge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowLarge?: ResponsiveBoolean
    /**
     * set box shadow to huge
     * ```css
     * { box-shadow: 0 14px 24px rgba(0, 0, 0, 0.16), 0 0 2px rgba(0,0,0,0.02);}
     * ```
     * @example
     * ```tsx
     * <Box shadowHuge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowHuge?: ResponsiveBoolean
    /**
     * set box shadow to gigantic
     * ```css
     * { box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0,0,0,0.02);}
     * ```
     * @example
     * ```tsx
     * <Box shadowGigantic></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowGigantic?: ResponsiveBoolean
    /**
     * set box shadow to inner
     * ```css
     * { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);}
     * ```
     * @example
     * ```tsx
     * <Box shadowInner></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowInner?: ResponsiveBoolean
    /**
     * set box shadow to outline
     * ```css
     * { box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);}
     * ```
     * @example
     * ```tsx
     * <Box shadowOutline></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowOutline?: ResponsiveBoolean
    /**
     * set box shadow to none
     * ```css
     * { box-shadow: none;}
     * ```
     * @example
     * ```tsx
     * <Box shadowNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowNone?: ResponsiveBoolean
  }
}
