import { CompletionItem } from 'vscode-languageserver/node'
import { getColor } from './color'
import { getShadow } from './shadow'
import { getLineHeight } from './lineHeight'
import { getRadii } from './radii'
import { getSpacing } from './spacing'
import { getFontSize } from './fontSize'
import { getFontWeight } from './fontWeight'
import { getLayout } from './layout'
import { getDisplay } from './display'
import { otherCompletions } from './others'
import { getPosition } from './position'
import { getOverflow } from './overflow'
import { outlineCompletions } from './outline'
import { gridCompletions } from './grid'
import { getTextAlign } from './textAlign'
import { getBoxSizing } from './debug'
import { getCursor } from './cursor'
import { getBorder } from './border'

export function getCompletions(): CompletionItem[] {
  return [
    ...getColor(),
    ...getDisplay(),
    ...getBorder(),
    ...getSpacing(),
    ...getFontSize(),
    ...getLineHeight(),
    ...getRadii(),
    ...getShadow(),
    ...getFontWeight(),
    ...getLayout(),
    ...getPosition(),
    ...getOverflow(),
    ...getTextAlign(),
    ...getBoxSizing(),
    ...getCursor(),
    ...gridCompletions,
    ...outlineCompletions,
    ...otherCompletions,
  ]
}
