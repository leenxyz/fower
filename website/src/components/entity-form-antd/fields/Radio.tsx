import React, { FC } from 'react'
import { Radio as AntdRadio } from 'antd'
import { FormItem } from '../FormItem'
import { RegisterFieldProps, Enum, GqlConfig } from 'entity-form'

export const Radio: FC<RegisterFieldProps> = (props) => {
  const { field } = props

  const optionsData: Enum = typeof field.enum === 'function' ? field.enum() : field.enum || []
  return (
    <FormItem {...props}>
      <AntdRadio.Group>
        {optionsData.map((item, index) => (
          <AntdRadio key={index} value={item.value}>
            {item.label}
          </AntdRadio>
        ))}
      </AntdRadio.Group>
    </FormItem>
  )
}
