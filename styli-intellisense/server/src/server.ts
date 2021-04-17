/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  CompletionItem,
  CompletionItemKind,
  TextDocumentPositionParams,
  TextDocumentSyncKind,
  InitializeResult,
} from 'vscode-languageserver/node'

import { TextDocument } from 'vscode-languageserver-textdocument'
import { getCompletions } from './completions'

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all)

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument)

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

// This handler provides the initial list of the completion items.
connection.onCompletion((textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
  // The pass parameter contains the position of the text document in
  // which code complete got requested. For the example we ignore this
  // info and always provide the same completion items.

  const document = documents.get(textDocumentPosition.textDocument.uri)
  if (!document) {
    return []
  }

  const { position } = textDocumentPosition
  const offset = document.offsetAt(textDocumentPosition.position)
  const lines = document.getText().slice(0, offset).split('\n')
  const currentLine = lines[position.line]

  if (!currentLine.length || !currentLine.trimStart().startsWith('<')) {
    return []
  }

  return [
    ...getCompletions(),
    {
      label: 'TypeScript',
      kind: CompletionItemKind.Text,
      detail: 'TypeScript details',
      // textEdit: {
      // 	// TODO:
      // 	range: {} as any,
      // 	newText: 'v-bind="$1"',
      // },
      documentation: {
        kind: 'markdown',
        value:
          'Indicates Vue instance for this element has NOT finished compilation.\n\n[API Reference](https://vuejs.org/v2/api/#v-cloak)',
      },
    },
  ]
})

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
  (item: CompletionItem): CompletionItem => {
    return item
  },
)

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection)

// Listen on the connection
connection.listen()
