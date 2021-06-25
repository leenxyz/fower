import React from 'react'
import { setConfig, injectGlobalStyle } from '@fower/core'
import presetWeb from '@fower/preset-web'
import { styleSheet } from '@fower/sheet'
import { getAtomIds } from '@fower/cache'
import { isBrowser } from '@fower/utils'

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

// TODO: need refactor
if (isBrowser) {
  injectGlobalStyle({
    '*, ::before, ::after': {
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: '#d4d4d4',
      boxSizing: 'border-box',
    },
  })
}
