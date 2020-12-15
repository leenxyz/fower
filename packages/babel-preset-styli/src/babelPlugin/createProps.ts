import * as types from '@babel/types'

export function createProps(attrs: types.JSXAttribute[]) {
  // create props
  const props = attrs.reduce((result: any, node: any) => {
    const name = node?.name?.name
    const { expression, value } = node?.value || {}

    if (!name || types.isExpression(expression)) return result

    return { ...result, [name]: value || true }
  }, {})

  return { props }
}
