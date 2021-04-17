
<template>
  <div>
    <!-- <h1 class="text4XL" p1 red400 border-6>Hello, Vue</h1> -->
    <h1 red300>Hello, Vue x</h1>
    <h1 red300 border>Hello, Vuexxx</h1>
    <div h-200 textXS toEvenly title="">
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

