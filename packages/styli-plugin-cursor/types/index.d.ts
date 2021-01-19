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
     * <View cursor="pointer"></View>
     * ```
     */
    cursor?: CSS.Property.Cursor | CSS.Property.Cursor[] | boolean

    /**
     * Set cursor to alias
     *
     * @example
     * ```tsx
     * <View cursorAlias></View>
     * ```
     */
    cursorAlias?: boolean

    /**
     * Set cursor to all-scroll
     *
     * @example
     * ```tsx
     * <View cursorAllScroll></View>
     * ```
     */
    cursorAllScroll?: boolean

    /**
     * Set cursor to auto
     *
     * @example
     * ```tsx
     * <View cursorAuto></View>
     * ```
     */
    cursorAuto?: boolean

    /**
     * Set cursor to cell
     *
     * @example
     * ```tsx
     * <View cursorCell></View>
     * ```
     */
    cursorCell?: boolean

    /**
     * Set cursor to col-resize
     *
     * @example
     * ```tsx
     * <View cursorColResize></View>
     * ```
     */
    cursorColResize?: boolean

    /**
     * Set cursor to context-menu
     *
     * @example
     * ```tsx
     * <View cursorContextMenu></View>
     * ```
     */
    cursorContextMenu?: boolean

    /**
     * Set cursor to copy
     *
     * @example
     * ```tsx
     * <View cursorCopy></View>
     * ```
     */
    cursorCopy?: boolean

    /**
     * Set cursor to crosshair
     *
     * @example
     * ```tsx
     * <View cursorCrosshair></View>
     * ```
     */
    cursorCrosshair?: boolean

    /**
     * Set cursor to default
     *
     * @example
     * ```tsx
     * <View cursorDefault></View>
     * ```
     */
    cursorDefault?: boolean

    /**
     * Set cursor to e-resize
     *
     * @example
     * ```tsx
     * <View cursorEResize></View>
     * ```
     */
    cursorEResize?: boolean

    /**
     * Set cursor to ew-resize
     *
     * @example
     * ```tsx
     * <View cursorEwResize></View>
     * ```
     */
    cursorEwResize?: boolean

    /**
     * Set cursor to grab
     *
     * @example
     * ```tsx
     * <View cursorGrab></View>
     * ```
     */
    cursorGrab?: boolean

    /**
     * Set cursor to grabbing
     *
     * @example
     * ```tsx
     * <View cursorGrabbing></View>
     * ```
     */
    cursorGrabbing?: boolean

    /**
     * Set cursor to help
     *
     * @example
     * ```tsx
     * <View cursorHelp></View>
     * ```
     */
    cursorHelp?: boolean

    /**
     * Set cursor to move
     *
     * @example
     * ```tsx
     * <View cursorMove></View>
     * ```
     */
    cursorMove?: boolean

    /**
     * Set cursor to n-resize
     *
     * @example
     * ```tsx
     * <View cursorNResize></View>
     * ```
     */
    cursorNResize?: boolean

    /**
     * Set cursor to ne-resize
     *
     * @example
     * ```tsx
     * <View cursorNeResize></View>
     * ```
     */
    cursorNeResize?: boolean

    /**
     * Set cursor to nesw-resize
     *
     * @example
     * ```tsx
     * <View cursorNeswResize></View>
     * ```
     */
    cursorNeswResize?: boolean

    /**
     * Set cursor to no-drop
     *
     * @example
     * ```tsx
     * <View cursorNoDrop></View>
     * ```
     */
    cursorNoDrop?: boolean

    /**
     * Set cursor to none
     *
     * @example
     * ```tsx
     * <View cursorNone></View>
     * ```
     */
    cursorNone?: boolean

    /**
     * Set cursor to not-allowed
     *
     * @example
     * ```tsx
     * <View cursorNotAllowed></View>
     * ```
     */
    cursorNotAllowed?: boolean

    /**
     * Set cursor to ns-resize
     *
     * @example
     * ```tsx
     * <View cursorNsResize></View>
     * ```
     */
    cursorNsResize?: boolean

    /**
     * Set cursor to nw-resize
     *
     * @example
     * ```tsx
     * <View cursorNwResize></View>
     * ```
     */
    cursorNwResize?: boolean

    /**
     * Set cursor to nwse-resize
     *
     * @example
     * ```tsx
     * <View cursorNwseResize></View>
     * ```
     */
    cursorNwseResize?: boolean

    /**
     * Set cursor to pointer
     *
     * @example
     * ```tsx
     * <View cursorPointer></View>
     * ```
     */
    cursorPointer?: boolean

    /**
     * Set cursor to progress
     *
     * @example
     * ```tsx
     * <View cursorProgress></View>
     * ```
     */
    cursorProgress?: boolean

    /**
     * Set cursor to row-resize
     *
     * @example
     * ```tsx
     * <View cursorRowResize></View>
     * ```
     */
    cursorRowResize?: boolean

    /**
     * Set cursor to s-resize
     *
     * @example
     * ```tsx
     * <View cursorSResize></View>
     * ```
     */
    cursorSResize?: boolean

    /**
     * Set cursor to se-resize
     *
     * @example
     * ```tsx
     * <View cursorSeResize></View>
     * ```
     */
    cursorSeResize?: boolean

    /**
     * Set cursor to sw-resize
     *
     * @example
     * ```tsx
     * <View cursorSwResize></View>
     * ```
     */
    cursorSwResize?: boolean

    /**
     * Set cursor to text
     *
     * @example
     * ```tsx
     * <View cursorText></View>
     * ```
     */
    cursorText?: boolean

    /**
     * Set cursor to vertical-text
     *
     * @example
     * ```tsx
     * <View cursorVerticalText></View>
     * ```
     */
    cursorVerticalText?: boolean

    /**
     * Set cursor to w-resize
     *
     * @example
     * ```tsx
     * <View cursorWResize></View>
     * ```
     */
    cursorWResize?: boolean

    /**
     * Set cursor to wait
     *
     * @example
     * ```tsx
     * <View cursorWait></View>
     * ```
     */
    cursorWait?: boolean

    /**
     * Set cursor to zoom-in
     *
     * @example
     * ```tsx
     * <View cursorZoomIn></View>
     * ```
     */
    cursorZoomIn?: boolean

    /**
     * Set cursor to zoom-out
     *
     * @example
     * ```tsx
     * <View cursorZoomOut></View>
     * ```
     */
    cursorZoomOut?: boolean
  }
}
