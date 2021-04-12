<template>
  <div>
    <h1 class="red400 textSM bgBlue200">Hello, Vue</h1>
    <!-- <div h-200 textXS debugChildren toRight>
      <div square-100></div>
      <div square-100></div>
      <div square-100></div>
    </div> -->
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

<style>
h1 {
  font-style: italic;
}
.red {
  color: red;
}
</style>
