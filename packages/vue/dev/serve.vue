<script lang="ts">
import Vue from 'vue'
import { Span, Div } from '@/entry'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Div,
    Span,
  },
})
</script>

<template>
  <div id="app">
    <Div bgRed400 p-40>haha</Div>
    <Div center f-20 bgGreen500 p-30 c-200>
      haha
      <Span bgYellow400 p="30" white>My Text</Span>
    </Div>
  </div>
</template>
