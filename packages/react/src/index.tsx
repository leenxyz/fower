import React from 'react'
import { setConfig, styleSheet, fowerStore } from '@fower/core'
import presetWeb from '@fower/preset-web'

setConfig(presetWeb)

const getAtomIds = fowerStore.getAtomIds

export { AtomicProps } from '@fower/atomic-props'
export * from '@fower/core'
export * from '@fower/styled'
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
