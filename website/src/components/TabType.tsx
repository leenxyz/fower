import React from 'react'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

interface Item {
  type: 'react' | 'vue'
  value: any
}

interface TabType {
  label: string
  value: string
}

const tabTypes = [
  { label: 'React/RN', value: 'react' },
  { label: 'Vue', value: 'vue' },
]

export const TabType = ({ items, types = tabTypes }: { items: Item[]; types: TabType[] }) => {
  return (
    <Tabs defaultValue="react" values={types}>
      {types.map((tabType) => {
        const tab = items.find((item) => item.type === tabType.value)
        return (
          <TabItem key={tabType.value} value={tabType.value}>
            {tab?.value}
          </TabItem>
        )
      })}
    </Tabs>
  )
}
