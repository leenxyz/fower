import React, { FC } from 'react'
import { InputNumber as AntdInputNumber } from 'antd'
import { FormItem } from '../FormItem'
import { RegisterFieldProps } from 'entity-form'

export const InputNumber: FC<RegisterFieldProps> = props => {
  const { componentProps = {} } = props.field
  return (
    <FormItem {...props}>
      <AntdInputNumber {...componentProps}></AntdInputNumber>
    </FormItem>
  )
}
