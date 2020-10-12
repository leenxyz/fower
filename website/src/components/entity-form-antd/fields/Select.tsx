import React, { FC } from 'react'
import { Select as AntdSelect } from 'antd'
import { FormItem } from '../FormItem'
import { RegisterFieldProps, Enum, GqlConfig } from 'entity-form'
import get from 'lodash.get'

const { Option } = AntdSelect

export const Select: FC<RegisterFieldProps> = (props) => {
  const { field } = props
  const { componentProps = {} } = field

  const options = (get(props.result.state.enums, props.name) || []) as Enum

  return (
    <FormItem {...props}>
      <AntdSelect {...componentProps}>
        {options.map((item, i) => (
          <Option key={i} value={item.value}>
            {item.label}
          </Option>
        ))}
      </AntdSelect>
    </FormItem>
  )
}
