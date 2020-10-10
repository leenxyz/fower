<template>
  <div class="hello" :style="style">
    <h1 class="box">{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>
  </div>
</template>

<script>
import { createStyle, Styli } from '@styli/core';

Styli.setUnit('px');

export default {
  name: 'HelloWorld',
  data() {
    console.log('---:', createStyle(this.styli));
    return {
      style: createStyle(this.styli),
    };
  },

  props: {
    msg: String,
    styli: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.box {
  font-size: 40px;
}
</style>
