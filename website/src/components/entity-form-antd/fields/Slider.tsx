import React, { FC } from 'react'
import { Slider as AntdSlider } from 'antd'
import { FormItem } from '../FormItem'
import { RegisterFieldProps } from 'entity-form'

export const Slider: FC<RegisterFieldProps> = props => {
  function onChange(value: any) {
    props.result.handlerBuilder.createChangeHandler(props.name)(value)
  }
  return (
    <FormItem {...props}>
      <AntdSlider value={props.value} onChange={onChange}></AntdSlider>
    </FormItem>
  )
}
