import { Property } from 'csstype'

export interface Cursor {
  cursor?: Property.Cursor | Property.Cursor[] | boolean

  cursorAlias?: boolean
  cursorAllScroll?: boolean
  cursorAuto?: boolean
  cursorCell?: boolean
  cursorColResize?: boolean
  cursorContextMenu?: boolean
  cursorCopy?: boolean
  cursorCrosshair?: boolean
  cursorDefault?: boolean
  cursorEResize?: boolean
  cursorEwResize?: boolean
  cursorGrab?: boolean
  cursorGrabbing?: boolean
  cursorHelp?: boolean
  cursorMove?: boolean
  cursorNResize?: boolean
  cursorCursorneResize?: boolean
  cursorNeswResize?: boolean
  cursorNoDrop?: boolean
  cursorNone?: boolean
  cursorNotAllowed?: boolean
  cursorNsResize?: boolean
  cursorNwResize?: boolean
  cursorNwseResize?: boolean
  cursorPointer?: boolean
  cursorProgress?: boolean
  cursorRowResize?: boolean
  cursorSResize?: boolean
  cursorSeResize?: boolean
  cursorSwResize?: boolean
  cursorText?: boolean
  cursorVerticalText?: boolean
  cursorWResize?: boolean
  cursorWait?: boolean
  cursorZoomIn?: boolean
  cursorZoomOut?: boolean
}
