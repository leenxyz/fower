import Vue, { PluginFunction, VueConstructor } from 'vue'

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean
}

declare const Styli: { install: InstallFunction }
export default Styli

export const Div: VueConstructor<Vue>
export const Span: VueConstructor<Vue>
