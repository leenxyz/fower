import { styli } from '@styli/core'
import presetDefault from '@styli/preset-default'
import { transform } from 'styli-transform'
import { getOptions } from 'loader-utils'

let cssStr = ''
export default function (source: string, map: any, meta: any) {
  // @ts-ignore
  const webpackEnv = this

  const options = getOptions(webpackEnv)
  styli.configure(() => Object.assign({}, presetDefault, options))

  // 申明异步 loader
  const callback = webpackEnv.async()

  // 修改源码，抽离 css
  let { code, css } = transform(source, styli)

  if (css) {
    cssStr += css

    // 生成 styli.css 加入 webpack 构建
    webpackEnv._compilation.assets['styli.css'] = {
      source: () => cssStr,
      size: () => cssStr.length,
    }
  }

  callback(null, code, map, meta)
  return
}
