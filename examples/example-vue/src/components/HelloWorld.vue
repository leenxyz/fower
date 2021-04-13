<template>
  <div>
    <h1 v-css class="textSM p1 red200 border-4">Hello, Vue</h1>
    <div h-200 textXS toEvenly>
      <div bgGreen100 square-90 border class="red300">AAA</div>
      <div m4 toCenter square-100 bgOrange200>BBB</div>
      <div class="border red100" toCenter bgBlue400 square-100 green400 white>CCC</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      color: 'red',
    }
  },
}
</script>
