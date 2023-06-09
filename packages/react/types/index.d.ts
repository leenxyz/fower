/// <reference types="@fower/preset-web" />
import React from 'react'
declare const getAtomIds: () => string[]
export { AtomicProps } from '@fower/atomic-props'
export * from '@fower/core'
export * from '@fower/styled'
export * from '../dist/jsx'
export * from '../dist/Box'
export * from '../dist/useMode'
export { getAtomIds }
export declare function getCssString(): string
export declare function ServerStyle(): React.JSX.Element
