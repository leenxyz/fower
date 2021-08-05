import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set cursor to any value
     * ```css
     * { cursor: $value }
     * ```
     * @example
     * ```
     * <Box cursor="pointer"></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursor?: ResponsiveValue<CSS.Property.Cursor>
    /**
     * Set cursor to alias
     * ```css
     * { cursor: alias; }
     * ```
     * @example
     * ```tsx
     * <Box cursorAlias></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorAlias?: ResponsiveBoolean
    /**
     * Set cursor to all-scroll
     * ```css
     * { cursor: all-scroll; }
     * ```
     * @example
     * ```tsx
     * <Box cursorAllScroll></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorAllScroll?: ResponsiveBoolean
    /**
     * Set cursor to auto
     * ```css
     * { cursor: auto; }
     * ```
     * @example
     * ```tsx
     * <Box cursorAuto></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorAuto?: ResponsiveBoolean
    /**
     * Set cursor to cell
     * ```css
     * { cursor: cell; }
     * ```
     * @example
     * ```tsx
     * <Box cursorCell></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorCell?: ResponsiveBoolean
    /**
     * Set cursor to col-resize
     * ```css
     * { cursor: col-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorColResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorColResize?: ResponsiveBoolean
    /**
     * Set cursor to context-menu
     * ```css
     * { cursor: context-menu; }
     * ```
     * @example
     * ```tsx
     * <Box cursorContextMenu></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorContextMenu?: ResponsiveBoolean
    /**
     * Set cursor to copy
     * ```css
     * { cursor: copy; }
     * ```
     * @example
     * ```tsx
     * <Box cursorCopy></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorCopy?: ResponsiveBoolean
    /**
     * Set cursor to crosshair
     * ```css
     * { cursor: crosshair; }
     * ```
     * @example
     * ```tsx
     * <Box cursorCrosshair></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorCrosshair?: ResponsiveBoolean
    /**
     * Set cursor to default
     * ```css
     * { cursor: default; }
     * ```
     * @example
     * ```tsx
     * <Box cursorDefault></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorDefault?: ResponsiveBoolean
    /**
     * Set cursor to e-resize
     * ```css
     * { cursor: e-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorEResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorEResize?: ResponsiveBoolean
    /**
     * Set cursor to ew-resize
     * ```css
     * { cursor: ew-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorEwResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorEwResize?: ResponsiveBoolean
    /**
     * Set cursor to grab
     * ```css
     * { cursor: grab; }
     * ```
     * @example
     * ```tsx
     * <Box cursorGrab></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorGrab?: ResponsiveBoolean
    /**
     * Set cursor to grabbing
     * ```css
     * { cursor: grabbing; }
     * ```
     * @example
     * ```tsx
     * <Box cursorGrabbing></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorGrabbing?: ResponsiveBoolean
    /**
     * Set cursor to help
     * ```css
     * { cursor: help; }
     * ```
     * @example
     * ```tsx
     * <Box cursorHelp></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorHelp?: ResponsiveBoolean
    /**
     * Set cursor to move
     * ```css
     * { cursor: move; }
     * ```
     * @example
     * ```tsx
     * <Box cursorMove></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorMove?: ResponsiveBoolean
    /**
     * Set cursor to n-resize
     * ```css
     * { cursor: n-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorNResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorNResize?: ResponsiveBoolean
    /**
     * Set cursor to ne-resize
     * ```css
     * { cursor: ne-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorNeResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorNeResize?: ResponsiveBoolean
    /**
     * Set cursor to nesw-resize
     * ```css
     * { cursor: nesw-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorNeswResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorNeswResize?: ResponsiveBoolean
    /**
     * Set cursor to no-drop
     * ```css
     * { cursor: no-drop; }
     * ```
     * @example
     * ```tsx
     * <Box cursorNoDrop></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorNoDrop?: ResponsiveBoolean
    /**
     * Set cursor to none
     * ```css
     * { cursor: none; }
     * ```
     * @example
     * ```tsx
     * <Box cursorNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorNone?: ResponsiveBoolean
    /**
     * Set cursor to not-allowed
     * ```css
     * { cursor: not-allowed; }
     * ```
     * @example
     * ```tsx
     * <Box cursorNotAllowed></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorNotAllowed?: ResponsiveBoolean
    /**
     * Set cursor to ns-resize
     * ```css
     * { cursor: ns-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorNsResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorNsResize?: ResponsiveBoolean
    /**
     * Set cursor to nw-resize
     * ```css
     * { cursor: nw-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorNwResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorNwResize?: ResponsiveBoolean
    /**
     * Set cursor to nwse-resize
     * ```css
     * { cursor: nwse-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorNwseResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorNwseResize?: ResponsiveBoolean
    /**
     * Set cursor to pointer
     * ```css
     * { cursor: pointer; }
     * ```
     * @example
     * ```tsx
     * <Box cursorPointer></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorPointer?: ResponsiveBoolean
    /**
     * Set cursor to progress
     * ```css
     * { cursor: progress; }
     * ```
     * @example
     * ```tsx
     * <Box cursorProgress></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorProgress?: ResponsiveBoolean
    /**
     * Set cursor to row-resize
     * ```css
     * { cursor: row-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorRowResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorRowResize?: ResponsiveBoolean
    /**
     * Set cursor to s-resize
     * ```css
     * { cursor: s-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorSResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorSResize?: ResponsiveBoolean
    /**
     * Set cursor to se-resize
     * ```css
     * { cursor: se-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorSeResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorSeResize?: ResponsiveBoolean
    /**
     * Set cursor to sw-resize
     * ```css
     * { cursor: sw-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorSwResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorSwResize?: ResponsiveBoolean
    /**
     * Set cursor to text
     * ```css
     * { cursor: text; }
     * ```
     * @example
     * ```tsx
     * <Box cursorText></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorText?: ResponsiveBoolean
    /**
     * Set cursor to vertical-text
     * ```css
     * { cursor: vertical-text; }
     * ```
     * @example
     * ```tsx
     * <Box cursorVerticalText></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorVerticalText?: ResponsiveBoolean
    /**
     * Set cursor to w-resize
     * ```css
     * { cursor: w-resize; }
     * ```
     * @example
     * ```tsx
     * <Box cursorWResize></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorWResize?: ResponsiveBoolean
    /**
     * Set cursor to wait
     * ```css
     * { cursor: wait; }
     * ```
     * @example
     * ```tsx
     * <Box cursorWait></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorWait?: ResponsiveBoolean
    /**
     * Set cursor to zoom-in
     * ```css
     * { cursor: zoom-in; }
     * ```
     * @example
     * ```tsx
     * <Box cursorZoomIn></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorZoomIn?: ResponsiveBoolean
    /**
     * Set cursor to zoom-out
     * ```css
     * { cursor: zoom-out; }
     * ```
     * @example
     * ```tsx
     * <Box cursorZoomOut></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursorZoomOut?: ResponsiveBoolean
  }
}
