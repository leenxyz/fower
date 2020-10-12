<template>
<!-- <div :style="stylier" @click="handleClick"> -->
<div :style="stylier">
  <slot />
</div>
</template>

<script>
import {
  createStyle,
  Styli
} from '@styli/core';
Styli.setUnit('px');
export default {
  name: 'Div',
  componentName: 'Div',
  props: {
    styli: {
      type: String,
      default: '',
    }
  },
  computed: {
    stylier() {
      return createStyle(this.styli)
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
