import React, { FC } from 'react'
import { Button } from 'antd'

export const Submit: FC<any> = props => {
  return (
    <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
      {props.children || '提交'}
    </Button>
  )
}
