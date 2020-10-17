<script lang="ts">
import Vue from 'vue'
import { toFinalProps } from '@styli/core'

export default Vue.extend({
  name: 'Span',
  computed: {
    styli() {
      const keys = Object.keys(this.$attrs)
      const props = keys.reduce((r, c) => {
        return { ...r, [c]: true }
      }, {})
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
  <span :style="styli" @click="handleClick">
    <slot />
  </span>
</template>
