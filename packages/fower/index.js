#!/usr/bin/env node

const { program } = require('commander')
const { SemicolonPreference } = require('typescript')
const { join } = require('path')
const { Project } = require('ts-morph')

function gen(filename) {
  const project = new Project()
  const cwd = process.cwd()
  const outPath = join(cwd, 'test.d.ts')
  const sourceFile = project.createSourceFile(outPath, undefined, {
    overwrite: true,
  })

  sourceFile.addStatements('declare const _default: () => FowerPlugin')
  sourceFile.addStatements('export default _default')

  const typingModule = sourceFile.addModule({
    name: `'@fower/atomic-props'`,
  })

  typingModule.addInterface({
    name: 'AtomicProps',
    isExported: true,
    properties: [
      {
        name: 'bg',
        type: 'string',
        docs: [
          {
            description: ['好啊好啊', '```css', '{', '  animation: none;', '}', '```'].join('\n'),
            tags: [
              {
                tagName: 'example',
                text: '\n```\n<Box backgroundPosition="top left"></Box>\n```',
              },
            ],
          },
        ],
      },
    ],
  })
  sourceFile.formatText({
    indentSize: 2,
    semicolons: SemicolonPreference.Remove,
  })

  sourceFile.save().then(function () {
    console.log('done....')
  })
}

program.version('0.0.1')

program.command('g [filename]').description('Get dotfiles').action(gen)

program.parse(process.argv)
