import { padding } from './padding'
import { margin } from './margin'
import { CompletionItem } from 'vscode-languageclient'

export const completionItems: CompletionItem[] = [...padding, ...margin]
