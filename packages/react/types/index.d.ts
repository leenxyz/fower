/// <reference types="@fower/preset-web" />
import React from 'react'
import '@fower/atomic-props'
declare const getAtomIds: () => string[]
export * from '@fower/core'
export * from '@fower/styled'
export * from '../dist/jsx'
export * from '../dist/Box'
export * from '../dist/useMode'
export { getAtomIds }
export declare function getCssString(): string
export declare function ServerStyle(): React.JSX.Element
