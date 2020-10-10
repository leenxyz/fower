import React, { FC } from 'react'
import { DatePicker as AntdDatePicker } from 'antd'
import { RegisterFieldProps } from 'entity-form'
import moment  from 'moment'
import { FormItem } from '../FormItem'

export const DatePicker: FC<RegisterFieldProps> = props => {
  const { componentProps = {} } = props.field
  function onChange(value: any) {
    props.result.handlerBuilder.createChangeHandler(props.name)(value.toDate())
  }
  return (
    <FormItem {...props}>
      <AntdDatePicker
        value={moment(props.value)}
        onChange={onChange}
        {...componentProps}
      ></AntdDatePicker>
    </FormItem>
  )
}
