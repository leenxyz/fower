import { setConfig } from '@fower/core'
import { transform } from 'fower-transform'
import { getOptions } from 'loader-utils'
import { Preset } from '@fower/types'

export interface LoaderOption {
  fowerConfig: Preset
  output: string
}

let cssStr = ''
export default function (source: string, map: any, meta: any) {
  // @ts-ignore
  const webpackEnv = this

  const options: unknown = getOptions(webpackEnv)
  const { fowerConfig = {}, output = 'fower.css' } = (options || {}) as LoaderOption

  setConfig(fowerConfig)

  // 申明异步 loader
  const callback = webpackEnv.async()

  // 修改源码，抽离 css
  let { code, css } = transform(source)

  if (css) {
    cssStr += css

    // 生成 fower.css 加入 webpack 构建
    webpackEnv._compilation.assets[output] = {
      source: () => cssStr,
      size: () => cssStr.length,
    }
  }

  callback(null, code, map, meta)
  return
}
