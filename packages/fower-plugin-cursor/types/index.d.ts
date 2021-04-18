import { FowerPlugin } from '@fower/types'
import * as CSS from 'csstype'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * Set cursor
     *
     * @example
     * ```tsx
     * <Box cursor="pointer"></Box>
     * ```
     */
    cursor?: CSS.Property.Cursor | boolean

    /**
     * Set cursor to alias
     *
     * @example
     * ```tsx
     * <Box cursorAlias></Box>
     * ```
     */
    cursorAlias?: boolean

    /**
     * Set cursor to all-scroll
     *
     * @example
     * ```tsx
     * <Box cursorAllScroll></Box>
     * ```
     */
    cursorAllScroll?: boolean

    /**
     * Set cursor to auto
     *
     * @example
     * ```tsx
     * <Box cursorAuto></Box>
     * ```
     */
    cursorAuto?: boolean

    /**
     * Set cursor to cell
     *
     * @example
     * ```tsx
     * <Box cursorCell></Box>
     * ```
     */
    cursorCell?: boolean

    /**
     * Set cursor to col-resize
     *
     * @example
     * ```tsx
     * <Box cursorColResize></Box>
     * ```
     */
    cursorColResize?: boolean

    /**
     * Set cursor to context-menu
     *
     * @example
     * ```tsx
     * <Box cursorContextMenu></Box>
     * ```
     */
    cursorContextMenu?: boolean

    /**
     * Set cursor to copy
     *
     * @example
     * ```tsx
     * <Box cursorCopy></Box>
     * ```
     */
    cursorCopy?: boolean

    /**
     * Set cursor to crosshair
     *
     * @example
     * ```tsx
     * <Box cursorCrosshair></Box>
     * ```
     */
    cursorCrosshair?: boolean

    /**
     * Set cursor to default
     *
     * @example
     * ```tsx
     * <Box cursorDefault></Box>
     * ```
     */
    cursorDefault?: boolean

    /**
     * Set cursor to e-resize
     *
     * @example
     * ```tsx
     * <Box cursorEResize></Box>
     * ```
     */
    cursorEResize?: boolean

    /**
     * Set cursor to ew-resize
     *
     * @example
     * ```tsx
     * <Box cursorEwResize></Box>
     * ```
     */
    cursorEwResize?: boolean

    /**
     * Set cursor to grab
     *
     * @example
     * ```tsx
     * <Box cursorGrab></Box>
     * ```
     */
    cursorGrab?: boolean

    /**
     * Set cursor to grabbing
     *
     * @example
     * ```tsx
     * <Box cursorGrabbing></Box>
     * ```
     */
    cursorGrabbing?: boolean

    /**
     * Set cursor to help
     *
     * @example
     * ```tsx
     * <Box cursorHelp></Box>
     * ```
     */
    cursorHelp?: boolean

    /**
     * Set cursor to move
     *
     * @example
     * ```tsx
     * <Box cursorMove></Box>
     * ```
     */
    cursorMove?: boolean

    /**
     * Set cursor to n-resize
     *
     * @example
     * ```tsx
     * <Box cursorNResize></Box>
     * ```
     */
    cursorNResize?: boolean

    /**
     * Set cursor to ne-resize
     *
     * @example
     * ```tsx
     * <Box cursorNeResize></Box>
     * ```
     */
    cursorNeResize?: boolean

    /**
     * Set cursor to nesw-resize
     *
     * @example
     * ```tsx
     * <Box cursorNeswResize></Box>
     * ```
     */
    cursorNeswResize?: boolean

    /**
     * Set cursor to no-drop
     *
     * @example
     * ```tsx
     * <Box cursorNoDrop></Box>
     * ```
     */
    cursorNoDrop?: boolean

    /**
     * Set cursor to none
     *
     * @example
     * ```tsx
     * <Box cursorNone></Box>
     * ```
     */
    cursorNone?: boolean

    /**
     * Set cursor to not-allowed
     *
     * @example
     * ```tsx
     * <Box cursorNotAllowed></Box>
     * ```
     */
    cursorNotAllowed?: boolean

    /**
     * Set cursor to ns-resize
     *
     * @example
     * ```tsx
     * <Box cursorNsResize></Box>
     * ```
     */
    cursorNsResize?: boolean

    /**
     * Set cursor to nw-resize
     *
     * @example
     * ```tsx
     * <Box cursorNwResize></Box>
     * ```
     */
    cursorNwResize?: boolean

    /**
     * Set cursor to nwse-resize
     *
     * @example
     * ```tsx
     * <Box cursorNwseResize></Box>
     * ```
     */
    cursorNwseResize?: boolean

    /**
     * Set cursor to pointer
     *
     * @example
     * ```tsx
     * <Box cursorPointer></Box>
     * ```
     */
    cursorPointer?: boolean

    /**
     * Set cursor to progress
     *
     * @example
     * ```tsx
     * <Box cursorProgress></Box>
     * ```
     */
    cursorProgress?: boolean

    /**
     * Set cursor to row-resize
     *
     * @example
     * ```tsx
     * <Box cursorRowResize></Box>
     * ```
     */
    cursorRowResize?: boolean

    /**
     * Set cursor to s-resize
     *
     * @example
     * ```tsx
     * <Box cursorSResize></Box>
     * ```
     */
    cursorSResize?: boolean

    /**
     * Set cursor to se-resize
     *
     * @example
     * ```tsx
     * <Box cursorSeResize></Box>
     * ```
     */
    cursorSeResize?: boolean

    /**
     * Set cursor to sw-resize
     *
     * @example
     * ```tsx
     * <Box cursorSwResize></Box>
     * ```
     */
    cursorSwResize?: boolean

    /**
     * Set cursor to text
     *
     * @example
     * ```tsx
     * <Box cursorText></Box>
     * ```
     */
    cursorText?: boolean

    /**
     * Set cursor to vertical-text
     *
     * @example
     * ```tsx
     * <Box cursorVerticalText></Box>
     * ```
     */
    cursorVerticalText?: boolean

    /**
     * Set cursor to w-resize
     *
     * @example
     * ```tsx
     * <Box cursorWResize></Box>
     * ```
     */
    cursorWResize?: boolean

    /**
     * Set cursor to wait
     *
     * @example
     * ```tsx
     * <Box cursorWait></Box>
     * ```
     */
    cursorWait?: boolean

    /**
     * Set cursor to zoom-in
     *
     * @example
     * ```tsx
     * <Box cursorZoomIn></Box>
     * ```
     */
    cursorZoomIn?: boolean

    /**
     * Set cursor to zoom-out
     *
     * @example
     * ```tsx
     * <Box cursorZoomOut></Box>
     * ```
     */
    cursorZoomOut?: boolean
  }
}
