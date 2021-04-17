import { StyliPlugin } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set cursor
     *
     * @example
     * ```tsx
     * <Box cursor="pointer"></View>
     * ```
     */
    cursor?: CSS.Property.Cursor | boolean

    /**
     * Set cursor to alias
     *
     * @example
     * ```tsx
     * <Box cursorAlias></View>
     * ```
     */
    cursorAlias?: boolean

    /**
     * Set cursor to all-scroll
     *
     * @example
     * ```tsx
     * <Box cursorAllScroll></View>
     * ```
     */
    cursorAllScroll?: boolean

    /**
     * Set cursor to auto
     *
     * @example
     * ```tsx
     * <Box cursorAuto></View>
     * ```
     */
    cursorAuto?: boolean

    /**
     * Set cursor to cell
     *
     * @example
     * ```tsx
     * <Box cursorCell></View>
     * ```
     */
    cursorCell?: boolean

    /**
     * Set cursor to col-resize
     *
     * @example
     * ```tsx
     * <Box cursorColResize></View>
     * ```
     */
    cursorColResize?: boolean

    /**
     * Set cursor to context-menu
     *
     * @example
     * ```tsx
     * <Box cursorContextMenu></View>
     * ```
     */
    cursorContextMenu?: boolean

    /**
     * Set cursor to copy
     *
     * @example
     * ```tsx
     * <Box cursorCopy></View>
     * ```
     */
    cursorCopy?: boolean

    /**
     * Set cursor to crosshair
     *
     * @example
     * ```tsx
     * <Box cursorCrosshair></View>
     * ```
     */
    cursorCrosshair?: boolean

    /**
     * Set cursor to default
     *
     * @example
     * ```tsx
     * <Box cursorDefault></View>
     * ```
     */
    cursorDefault?: boolean

    /**
     * Set cursor to e-resize
     *
     * @example
     * ```tsx
     * <Box cursorEResize></View>
     * ```
     */
    cursorEResize?: boolean

    /**
     * Set cursor to ew-resize
     *
     * @example
     * ```tsx
     * <Box cursorEwResize></View>
     * ```
     */
    cursorEwResize?: boolean

    /**
     * Set cursor to grab
     *
     * @example
     * ```tsx
     * <Box cursorGrab></View>
     * ```
     */
    cursorGrab?: boolean

    /**
     * Set cursor to grabbing
     *
     * @example
     * ```tsx
     * <Box cursorGrabbing></View>
     * ```
     */
    cursorGrabbing?: boolean

    /**
     * Set cursor to help
     *
     * @example
     * ```tsx
     * <Box cursorHelp></View>
     * ```
     */
    cursorHelp?: boolean

    /**
     * Set cursor to move
     *
     * @example
     * ```tsx
     * <Box cursorMove></View>
     * ```
     */
    cursorMove?: boolean

    /**
     * Set cursor to n-resize
     *
     * @example
     * ```tsx
     * <Box cursorNResize></View>
     * ```
     */
    cursorNResize?: boolean

    /**
     * Set cursor to ne-resize
     *
     * @example
     * ```tsx
     * <Box cursorNeResize></View>
     * ```
     */
    cursorNeResize?: boolean

    /**
     * Set cursor to nesw-resize
     *
     * @example
     * ```tsx
     * <Box cursorNeswResize></View>
     * ```
     */
    cursorNeswResize?: boolean

    /**
     * Set cursor to no-drop
     *
     * @example
     * ```tsx
     * <Box cursorNoDrop></View>
     * ```
     */
    cursorNoDrop?: boolean

    /**
     * Set cursor to none
     *
     * @example
     * ```tsx
     * <Box cursorNone></View>
     * ```
     */
    cursorNone?: boolean

    /**
     * Set cursor to not-allowed
     *
     * @example
     * ```tsx
     * <Box cursorNotAllowed></View>
     * ```
     */
    cursorNotAllowed?: boolean

    /**
     * Set cursor to ns-resize
     *
     * @example
     * ```tsx
     * <Box cursorNsResize></View>
     * ```
     */
    cursorNsResize?: boolean

    /**
     * Set cursor to nw-resize
     *
     * @example
     * ```tsx
     * <Box cursorNwResize></View>
     * ```
     */
    cursorNwResize?: boolean

    /**
     * Set cursor to nwse-resize
     *
     * @example
     * ```tsx
     * <Box cursorNwseResize></View>
     * ```
     */
    cursorNwseResize?: boolean

    /**
     * Set cursor to pointer
     *
     * @example
     * ```tsx
     * <Box cursorPointer></View>
     * ```
     */
    cursorPointer?: boolean

    /**
     * Set cursor to progress
     *
     * @example
     * ```tsx
     * <Box cursorProgress></View>
     * ```
     */
    cursorProgress?: boolean

    /**
     * Set cursor to row-resize
     *
     * @example
     * ```tsx
     * <Box cursorRowResize></View>
     * ```
     */
    cursorRowResize?: boolean

    /**
     * Set cursor to s-resize
     *
     * @example
     * ```tsx
     * <Box cursorSResize></View>
     * ```
     */
    cursorSResize?: boolean

    /**
     * Set cursor to se-resize
     *
     * @example
     * ```tsx
     * <Box cursorSeResize></View>
     * ```
     */
    cursorSeResize?: boolean

    /**
     * Set cursor to sw-resize
     *
     * @example
     * ```tsx
     * <Box cursorSwResize></View>
     * ```
     */
    cursorSwResize?: boolean

    /**
     * Set cursor to text
     *
     * @example
     * ```tsx
     * <Box cursorText></View>
     * ```
     */
    cursorText?: boolean

    /**
     * Set cursor to vertical-text
     *
     * @example
     * ```tsx
     * <Box cursorVerticalText></View>
     * ```
     */
    cursorVerticalText?: boolean

    /**
     * Set cursor to w-resize
     *
     * @example
     * ```tsx
     * <Box cursorWResize></View>
     * ```
     */
    cursorWResize?: boolean

    /**
     * Set cursor to wait
     *
     * @example
     * ```tsx
     * <Box cursorWait></View>
     * ```
     */
    cursorWait?: boolean

    /**
     * Set cursor to zoom-in
     *
     * @example
     * ```tsx
     * <Box cursorZoomIn></View>
     * ```
     */
    cursorZoomIn?: boolean

    /**
     * Set cursor to zoom-out
     *
     * @example
     * ```tsx
     * <Box cursorZoomOut></View>
     * ```
     */
    cursorZoomOut?: boolean
  }
}
