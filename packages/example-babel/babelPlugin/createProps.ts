import * as types from '@babel/types'

export function createProps(attrs: types.JSXAttribute[]) {
  // create props
  const props = attrs.reduce((result: any, node: any) => {
    const name = node.name?.name
    const expression = node.value?.expression
    let value = node.value?.value

    if (!name) return result

    const isArrayExp = types.isArrayExpression(expression)
    const isExp = types.isExpression(expression)

    if (isExp && !isArrayExp) return result

    if (isArrayExp) {
      value = expression.elements.map((ele) => ele.value)
    }

    return { ...result, [name]: value || true }
  }, {})

  return { props }
}
