import React, { FC } from 'react'
import { Checkbox as AntdCheckbox } from 'antd'
import { FormItem } from '../FormItem'
import { RegisterFieldProps, Enum, GqlConfig } from 'entity-form'
import get from 'lodash.get'

const { Group } = AntdCheckbox

export const Checkbox: FC<RegisterFieldProps> = (props) => {
  const { name, result, field } = props
  const { helpers } = result
  const gql = props.field.gql as GqlConfig
  const value = get(result.state.values, name)
  const disabled = helpers.getDisabled(name)

  const optionsData: Enum = typeof field.enum === 'function' ? field.enum() : field.enum || []

  function onChange(value: any) {
    result.handlerBuilder.createChangeHandler(name)(value)
  }

  return (
    <FormItem {...props}>
      <Group value={value} onChange={onChange}>
        {optionsData.map((item) => {
          const checked = value.includes(item.value)
          return (
            <AntdCheckbox
              key={item.value.toString()}
              disabled={disabled && !checked}
              value={item.value}
            >
              {item.label}
            </AntdCheckbox>
          )
        })}
      </Group>
    </FormItem>
  )
}
