import Vue, { PluginFunction, VueConstructor } from 'vue'

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean
}

export const vFowerPlugin: { install: InstallFunction }
export const Div: VueConstructor<Vue>
export const Span: VueConstructor<Vue>

export * from '@fower/core'
export * from '@fower/styled'
export * from '@fower/utils'
