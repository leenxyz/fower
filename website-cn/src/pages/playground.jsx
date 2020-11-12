import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import { View, Text } from '@styli/react'
import { styled } from '@styli/styled'
import { css, createStyle, Sheet } from '@styli/core'
import { CodeHighLight } from '../components/HighLight'

const Textarea = styled('textarea')

function modifierToProps(modifier) {
  return modifier.split(/[\s\t\n]+/).reduce((result, cur) => ({ ...result, [cur]: true }), {})
}

function Playground() {
  // const [value, setValue] = useState('f1 f-12 m2 m-20 p4 p-40 center')
  const [code, setCode] = useState('')

  useEffect(() => {
    const props = modifierToProps('f1 f-12 m2 m-20 p4 p-40 inline')
    const sheet = new Sheet(props, {})
    setCode(sheet.toCss())
  }, [])

  return (
    <Layout wrapperClassName={css('row')}>
      <View row flex-1 w="100%">
        <View w={1 / 2}>
          <Textarea
            p4
            w="100%"
            h="100%"
            bgGray10
            defaultValue="f1 f-12 m2 m-20 p4 p-40"
            // value={value}
            // onChange={(e) => setValue(e?.target?.value)}
          ></Textarea>
        </View>
        <View flex-1 w={1 / 2}>
          <CodeHighLight
            code={code
              .split('.')
              .map((i) => `.${i}`)
              .splice(1)
              .join('\n')}
            lang="css"
          ></CodeHighLight>
        </View>
      </View>
    </Layout>
  )
}

export default Playground
