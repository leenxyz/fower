import React from 'react'
import { setConfig } from '@fower/core'
import presetWeb from '@fower/preset-web'
import { styleSheet } from '@fower/sheet'
import { store } from '@fower/store'

setConfig(presetWeb)

const getAtomIds = store.getAtomIds

export * from './jsx'
export * from './Box'
export * from './useMode'
export { getAtomIds }

export function getCssString() {
  return styleSheet.getStyle()
}

export function ServerStyle() {
  return <style data-fower={getAtomIds()} dangerouslySetInnerHTML={{ __html: getCssString() }} />
}
