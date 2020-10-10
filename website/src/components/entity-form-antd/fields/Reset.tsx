import React, { FC } from 'react'
import { Button } from 'antd'

export const Rest: FC<any> = props => {
  return (
    <Button
      type="primary"
      htmlType="reset"
      onClick={props.resetForm}
      style={{ marginRight: '10px' }}
    >
      {props.children || '重置'}
    </Button>
  )
}
