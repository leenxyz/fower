import React, { FC } from 'react'
import { Radio as AntdRadio } from 'antd'
import { FormItem } from '../FormItem'
import { useQuery } from 'stook-graphql'
import { RegisterFieldProps, Enum, GqlConfig } from 'entity-form'

const GqlItem: FC<RegisterFieldProps> = props => {
  const gql = props.field.gql as GqlConfig
  const { loading, data = [] } = useQuery(gql.query, gql.variables || {})

  if (loading) return null
  let optionsData: Enum
  if (typeof gql.mapToEnum === 'function') {
    optionsData = gql.mapToEnum(data)
  } else {
    const { value, label } = gql.mapToEnum
    optionsData = data.map(i => ({ value: i[value], label: i[label] }))
  }

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

export const Radio: FC<RegisterFieldProps> = props => {
  const { field } = props
  const gql = props.field.gql as GqlConfig
  if (gql) return <GqlItem {...props}></GqlItem>

  const optionsData: Enum =
    typeof field.enum === 'function' ? field.enum() : field.enum || []
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
