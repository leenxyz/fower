import React from 'react'

import { EntityForm, entity, field } from 'entity-form'
import { registerAll } from 'entity-form-pristine'

registerAll()

@entity('user-entity')
class User {
  @field({ value: '', component: 'Input' })
  username: string

  @field({ value: '', component: 'Input', type: 'passord' })
  password: string

  onSubmit(values: User) {
    alert(JSON.stringify(values, null, 2))
  }
}

export default () => {
  return (
    <div>
      <EntityForm entity={User}></EntityForm>
    </div>
  )
}
