<template>
<div id="app">
  <Div>
    <div>222</div>
  </Div>
  <Hello styli="white s-500 bgBlack" />
</div>
</template>

<script>
import Hello from './components/HelloWorld';
import Div from './styli-vue/Div/index';
export default {
  name: 'App',
  components: {
    Div,
    Hello,
  },
  mounted() {
    console.log("view1", Div)
  },
};
</script>

<style>
</style>
