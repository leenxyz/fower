import * as React from 'react'
import { styled } from '@styli/styled'

export const View = styled('div')
export const Text = styled('span')

export const Nested = () => {
  return (
    <View
      s="100"
      center
      mt-100
      f={[10, 20, 30, 40]}
      css={{
        background: 'red',
        ':hover': {
          fontSize: '12px',
          color: 'yellow',
        },
        '::before': {
          content: '" "',
          display: 'block',
          width: '100px',
          height: '100px',
          backgroundColor: 'green',
        },
        '.p1': {
          fontSize: '22px',
          border: '1px solid yellow',
          '.p2': {
            fontSize: '11px',
            color: 'blue',
            ':hover': {
              fontSize: '18px',
              color: 'black',
            },
            '>span': {
              color: 'green',
            },
          },
        },
      }}
    >
      哈哈哈
      <div className="p1">
        小字
        <View className="p2">
          蓝字
          <span>哈哈哈哈哈</span>
        </View>
      </div>
    </View>
  )
}
