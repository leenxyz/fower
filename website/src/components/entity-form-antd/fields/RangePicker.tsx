import React, { FC } from 'react'
import { DatePicker } from 'antd'
import moment, { Moment } from 'moment'
import { RegisterFieldProps } from 'entity-form'
import { FormItem } from '../FormItem'

export const RangePicker: FC<RegisterFieldProps> = props => {
  const { componentProps = {} } = props.field
  const { RangePicker } = DatePicker
  const value = props.value.map((i: Date) => moment(i))

  function onChange(value: any) {
    const dateValue = value.map((i: Moment) => i.toDate())
    props.result.handlerBuilder.createChangeHandler(props.name)(dateValue)
  }
  return (
    <FormItem {...props}>
      <RangePicker value={value} onChange={onChange} {...componentProps} />
    </FormItem>
  )
}
