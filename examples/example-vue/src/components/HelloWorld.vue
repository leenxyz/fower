<template>
  <div>
    <h1 v-css class="textSM p1 red200 border-4">Hello, Vue</h1>
    <div h-200 textXS toEvenly>
      <div bgGreen100 square-90 border class="red300">AAx</div>
      <div m4 toCenter square-100 bgOrange200>b</div>
      <div class="border red100" bgBlue400>cdd</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  mounted() {
    console.log('......')
  },
  data() {
    console.log('render.x...')
    return {
      color: 'red',
    }
  },
  methods: {
    clickTitle() {
      this.color = 'green'
    },
  },
}
</script>
