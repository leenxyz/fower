<template>
  <div id="app">
    <Div>
      <div>
        222
        <Div>test</Div>
      </div>
    </Div>
    <Hello styli="white s-500 bgBlack" />
  </div>
</template>

<script>
import Hello from './components/HelloWorld';
export default {
  name: 'App',
  components: {
    Hello,
  },
  mounted() {},
};
</script>

<style></style>
