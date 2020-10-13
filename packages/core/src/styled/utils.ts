import { createStyle, Style } from '../'

// 模板字符串解析成完成字符串
export function templateStrToCommonStr(literals: string[], ...values: any[]) {
  let output = ''
  let index = 0
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index]
  }
  output += literals[index]
  return output.replace(/\n+/g, '')
}

// 解析样式
export function getStyles(...args: any): Style {
  // 从模板字符串解析
  if (Array.isArray(args[0])) {
    const [literals, ...values] = args
    return createStyle(templateStrToCommonStr(literals, ...values))
  }
  return createStyle(...args)
}
