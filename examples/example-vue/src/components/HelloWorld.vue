<template>
  <div debugChildren>
    <h1 m-20 :c="color" class="red bgred400" textRight p-10 bgRed200 block @click="clickTitle">
      {{ msg }} {{ color }}
    </h1>
    <p green60 fontBold borderT="1px solid green" bgRed400>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>

    <div h-200 textXS debugChildren toRight>
      <div square-100></div>
      <div square-100></div>
      <div square-100></div>
    </div>

    <div circle-100></div>

    <div left debugChildren>
      <div h-100 maxW-50 bgYellow200>maxW-50</div>
      <div h-100 maxW-50 bgYellow200>maxW-50</div>
      <div w-100 maxH-50 bgYellow200>maxH-50</div>
      <div h-100 minW-50 bgYellow200>minW-50</div>
      <div w-100 minH-50 bgYellow200>minH-50</div>
      <div w="[100,200,300,400]" bgYellow200>w="[200,400,600,800]"</div>
    </div>

    <div h-200 textXS toEvenly>
      <div square-100>AAA</div>
      <div selfStretch>BBB</div>
      <div square-100 toCenter>CCC</div>
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
