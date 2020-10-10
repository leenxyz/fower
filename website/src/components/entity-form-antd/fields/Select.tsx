import React, { FC } from 'react'
import { Select as AntdSelect } from 'antd'
import { FormItem } from '../FormItem'
import { RegisterFieldProps, Enum, GqlConfig } from 'entity-form'
import { useQuery } from 'stook-graphql'
import get from 'lodash.get'

const { Option } = AntdSelect

const GqlItem: FC<RegisterFieldProps> = props => {
  let valueProps: any = {}
  const gql = props.field.gql as GqlConfig
  const { loading, data = [] } = useQuery<any>(gql.query, gql.variables || {})

  if (loading) return null

  let optionsData: Enum

  if (typeof gql.mapToEnum === 'function') {
    optionsData = gql.mapToEnum(data)
  } else {
    const { items, value, label } = gql.mapToEnum
    const listData = items ? get(data, items || '') || [] : data
    optionsData = listData.map((i: any) => ({
      value: i[value],
      label: i[label],
    }))
  }

  if (data && gql.initialValue) {
    valueProps.value = gql.initialValue(data)
  }

  return (
    <FormItem {...props}>
      <AntdSelect {...valueProps} {...(props.field.componentProps || {})}>
        {optionsData.map((item, i) => (
          <Option key={i} value={item.value}>
            {item.label}
          </Option>
        ))}
      </AntdSelect>
    </FormItem>
  )
}

export const Select: FC<RegisterFieldProps> = props => {
  const { field } = props
  const { componentProps = {} } = field

  if (field.gql) return <GqlItem {...props}></GqlItem>

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
