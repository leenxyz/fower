import React from 'react'
import { setConfig } from '@fower/core'
import presetWeb from '@fower/preset-web'
import { styleSheet } from '@fower/sheet'
import { getAtomIds } from '@fower/cache'

export * from './jsx'
export * from './Box'
export { getAtomIds }

export function getCssString() {
  return styleSheet.getStyle()
}

export function ServerStyle() {
  return <style data-fower={getAtomIds()} dangerouslySetInnerHTML={{ __html: getCssString() }} />
}

setConfig(presetWeb)
