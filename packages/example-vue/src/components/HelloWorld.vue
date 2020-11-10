<template>
  <div class="hello" debugChildren>
    <h1 p-20 bgRed20 m="30" block>{{ msg }}</h1>
    <p green60 fontBold borderT="1px solid green">
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>

    <div h-200 f-12 debugChildren row justifyBetween itemsEnd>
      <div s-100></div>
      <div s-100></div>
      <div s-100></div>
    </div>
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

<style scoped>
h1 {
  font-style: italic;
}
</style>>
