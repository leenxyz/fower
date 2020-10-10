import React, { FC } from 'react'
import { Switch as AntdSwitch } from 'antd'
import { FormItem } from '../FormItem'
import { RegisterFieldProps } from 'entity-form'

export const Switch: FC<RegisterFieldProps> = props => {
  function onChange(checked: boolean) {
    props.result.handlerBuilder.createChangeHandler(props.name)(checked)
  }
  return (
    <FormItem {...props}>
      <AntdSwitch checked={props.value} onChange={onChange}></AntdSwitch>
    </FormItem>
  )
}
