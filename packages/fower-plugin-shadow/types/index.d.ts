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
     * set box shadow to sm
     * ```css
     * { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);}
     * ```
     * @example
     * ```tsx
     * <Box shadowSm></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowSM?: ResponsiveBoolean
    /**
     * set box shadow to md
     * ```css
     * { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);}
     * ```
     * @example
     * ```tsx
     * <Box shadowMd></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowMD?: ResponsiveBoolean
    /**
     * set box shadow to lg
     * ```css
     * { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);}
     * ```
     * @example
     * ```tsx
     * <Box shadowLg></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowLG?: ResponsiveBoolean
    /**
     * set box shadow to xl
     * ```css
     * { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);}
     * ```
     * @example
     * ```tsx
     * <Box shadowXl></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadowXL?: ResponsiveBoolean
    /**
     * set box shadow to 2xl
     * ```css
     * { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);}
     * ```
     * @example
     * ```tsx
     * <Box shadow2xl></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadow2XL?: ResponsiveBoolean
    /**
     * set box shadow to 3xl
     * ```css
     * { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);}
     * ```
     * @example
     * ```tsx
     * <Box shadow3xl></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadow3XL?: ResponsiveBoolean
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
