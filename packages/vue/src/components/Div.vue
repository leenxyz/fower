<script lang="ts">
import Vue from 'vue'
import { toFinalProps } from '@styli/core'

export default Vue.extend({
  name: 'Div',
  computed: {
    styli() {
      const keys = Object.keys(this.$attrs)
      const props = keys.reduce((r, c) => ({ ...r, [c]: true }), {})
      return toFinalProps(props).style
    },
  },
  methods: {
    handleClick(evt: any) {
      this.$emit('click', evt)
    },
  },
})
</script>

<template>
  <div :style="styli" @click="handleClick">
    <slot />
  </div>
</template>
