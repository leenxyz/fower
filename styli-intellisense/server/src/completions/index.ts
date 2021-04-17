import { CompletionItem } from 'vscode-languageserver/node'
import { getColor } from './color'
import { getShadow } from './shadow'
import { getLineHeight } from './lineHeight'
import { getRadii } from './radii'
import { getSpacing } from './spacing'
import { getFontSize } from './fontSize'
import { getFontWeight } from './fontWeight'
import { getLayout } from './layout'
import { otherCompletions } from './others'
import { getPosition } from './position'
import { getOverflow } from './overflow'
import { outlineCompletions } from './outline'

export function getCompletions(): CompletionItem[] {
  return [
    ...getColor(),
    ...getSpacing(),
    ...getFontSize(),
    ...getLineHeight(),
    ...getRadii(),
    ...getShadow(),
    ...getFontWeight(),
    ...getLayout(),
    ...getPosition(),
    ...getOverflow(),
    ...outlineCompletions,
    ...otherCompletions,
  ]
}
