import React, { FC } from 'react'
import { Input as AntdInput } from 'antd'
import { FormItem } from '../FormItem'
import { RegisterFieldProps } from 'entity-form'

export const Input: FC<RegisterFieldProps> = props => {
  const { componentProps = {} } = props.field
  return (
    <FormItem {...props}>
      <AntdInput {...componentProps}></AntdInput>
    </FormItem>
  )
}
