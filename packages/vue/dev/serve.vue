<script lang="ts">
import Vue from 'vue'
import fower from '@/entry'

Vue.use(fower)

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
    <div v-css="'bgRed400 p-40 center text3XL'" circle-100 mb-10 p="10">haha</div>
    <Div center textXL bgGreen500 p-30>
      haha
      <Span bgYellow400 p="30" white>My Text</Span>
    </Div>
  </div>
</template>
