<template>
<div id="app">
  <!-- <Div styli="white s-500 bgBlack" name="test-name">
      <div>test</div>
      <div styli="w-100 bgRed" @click="divClick">事件测试</div>
    </Div>
    <div style="height: 200px; width: 200px" @click="divClick2">test</div> -->
  <p>
  </p>
  <h5>tteeee</h5>
  <h5 style="color:red">tteeee</h5>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {},
  methods: {
    divClick() {
      alert('12344');
    },
    divClick2() {
      alert(344);
    },
  },
};
</script>
