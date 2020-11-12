<template>
  <div debugChildren>
    <h1 m-20 :color="color" class="red" textRight p-10 bgRed20 block @click="clickTitle">
      {{ msg }} {{ color }}
    </h1>
    <p green60 fontBold borderT="1px solid green">
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>

    <div h-200 f-12 debugChildren row justifyBetween itemsEnd>
      <div s-100></div>
      <div s-100></div>
      <div s-100></div>
    </div>

    <div circle-100></div>

    <div h-100 maxW-50 bgYellow20>maxW-50</div>
    <div w-100 maxH-50 bgYellow20>maxH-50</div>
    <div h-100 minW-50 bgYellow20>minW-50</div>
    <div w-100 minH-50 bgYellow20>minH-50</div>
    <div w="[100,200,300,400]" bgYellow20>w="[200,400,600,800]"</div>

    <div h-200 f-12 debugChildren row justifyBetween itemsEnd>
      <div s-100>AAA</div>
      <div selfStretch>BBB</div>
      <div s-100 center>CCC</div>
    </div>

    <div h-200 f-12 debugChildren centerX bottom>
      <div s-100>AAA</div>
      <div s-100 center>BBB</div>
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

