<template>
<div>
  <div>
    <Div styli="w-100 bgRed" @click="divClick">事件测试</Div>
  </div>
</div>
</template>

<script>
import Div from './styli-vue/Div/index.js'
export default {
  name: 'App',
  components: {
    Div
  },
  methods: {
    divClick() {
      // console.log("事件测试")
      alert("console")
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
