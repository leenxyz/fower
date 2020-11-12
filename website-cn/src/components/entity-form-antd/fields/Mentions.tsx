import React, { FC } from 'react'
import { Mentions as AntdMentions } from 'antd'
import { FormItem } from '../FormItem'
import { RegisterFieldProps, Enum } from 'entity-form'
import get from 'lodash.get'

const { Option } = AntdMentions

export const Mentions: FC<RegisterFieldProps> = (props) => {
  const { field } = props

  const options = (get(props.result.state.enums, props.name) || []) as Enum

  return (
    <FormItem {...props}>
      <AntdMentions>
        {options.map((item) => (
          <Option key={item.label} value={item.value}>
            {item.label}
          </Option>
        ))}
      </AntdMentions>
    </FormItem>
  )
}
