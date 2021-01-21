import Vue, { PluginFunction, VueConstructor } from 'vue'

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean
}

export const vStyliPlugin: { install: InstallFunction }
export const Div: VueConstructor<Vue>
export const Span: VueConstructor<Vue>

export * from '@styli/core'
export * from '@styli/styled'
export * from '@styli/utils'
