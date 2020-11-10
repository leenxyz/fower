<template>
  <div class="hello">
    <h1 p-20 bgRed20>{{ msg }}</h1>
    <p green60 fontBold>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
