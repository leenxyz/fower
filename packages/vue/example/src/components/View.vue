<template>
  <div class="hello" :style="style">
    <h1 class="box">{{ msg }}aaa</h1>
  </div>
</template>

<script>
import { createStyle, Styli } from '@styli/core';
Styli.setUnit('px');
export default {
  name: 'View',
  props: {
    msg: String,
    styli: String,
  },
  data() {
    console.log('---:', createStyle(this.styli));
    return {
      style: createStyle(this.styli),
    };
  },
  computed: {
    obj1() {
      return createStyle(this.styli);
    },
  },
};
</script>

<style scoped>
.box {
  width: 40px;
  height: 40px;
}
</style>
