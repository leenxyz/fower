import * as t from '@babel/types'

export function toStyle(path: any, sheet: any, attrs: any) {
  const style: any = sheet.toStyles()

  const propExpression = t.objectExpression(
    Object.entries(style).map(([key, value]: any) =>
      t.objectProperty(t.identifier(key), t.stringLiteral(value)),
    ),
  )

  // get origin style
  const oStyle: any = attrs.find((node: any) => node.name?.name === 'style')

  if (oStyle) {
    // merge style
    oStyle.value.expression.properties = [
      ...(propExpression as any).properties,
      ...oStyle.value.expression.properties,
    ]
  } else {
    // insert style
    const style = t.jsxAttribute(t.jsxIdentifier('style'), t.jsxExpressionContainer(propExpression))
    path.node.attributes.push(style)
  }
}
