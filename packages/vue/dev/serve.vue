<script lang="ts">
import Vue from 'vue'
import styli from '@/entry'

Vue.use(styli)

export default Vue.extend({
  name: 'ServeDev',
  data: () => {
    return {
      foo: '100',
    }
  },
})
</script>

<template>
  <div id="app">
    <div v-css="'bgRed40 p-40 center f-30'" circle-100 mb-10 p="10">haha</div>
    <Div center f-20 bgGreen500 p-30 c-200>
      haha
      <Span bgYellow400 p="30" white>My Text</Span>
    </Div>
  </div>
</template>
