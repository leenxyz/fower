import React, { FC } from 'react'
import { Form as AntdForm } from 'antd'
import { RegisterFormProps } from 'entity-form'

export const Form: FC<RegisterFormProps> = props => {
  const { formProps = {} } = props.result.state.entityConfig
  return (
    <AntdForm
      layout="vertical"
      {...props}
      {...formProps}
      onFinish={props.result.handlers.handleSubmit as any}
    >
      {props.children}
    </AntdForm>
  )
}
