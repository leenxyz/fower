import React, { FC } from 'react'
import { Mentions as AntdMentions } from 'antd'
import { FormItem } from '../FormItem'
import { RegisterFieldProps, Enum, GqlConfig } from 'entity-form'
import { useQuery } from 'stook-graphql'
import get from 'lodash.get'

const { Option } = AntdMentions

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
      <AntdMentions {...valueProps} {...(props.field.componentProps || {})}>
        {optionsData.map((item) => (
          <Option key={item.label} value={item.value}>
            {item.label}
          </Option>
        ))}
      </AntdMentions>
    </FormItem>
  )
}

export const Mentions: FC<RegisterFieldProps> = props => {
  const { field } = props

  if (field.gql) return <GqlItem {...props}></GqlItem>

  const options = (get(props.result.state.enums, props.name) || []) as Enum
  console.log('enum:', options)

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
