import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  CompletionItem,
  CompletionItemKind,
  TextDocumentPositionParams,
  TextDocumentSyncKind,
  InitializeResult,
} from 'vscode-languageserver'
import { TextDocument } from 'vscode-languageserver-textdocument'
import { completionItems } from '../types'

let connection = createConnection(ProposedFeatures.all)
let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument)

connection.onInitialize(() => {
  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: {
        resolveProvider: true,
      },
    },
  }
  return result
})

connection.onCompletion((_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
  return completionItems.map((item) => ({
    ...item,
    detail: `styli: ${item.detail}`,
    kind: CompletionItemKind.Keyword,
  }))
})

connection.onCompletionResolve(
  (item: CompletionItem): CompletionItem => {
    return completionItems.find((_item) => _item.label === item.label) || item
  },
)

documents.listen(connection)

connection.listen()
