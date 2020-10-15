<template>
<div>
  <Div>
    1.div
    <Div styli="w-100 bgRed" @click="divClick">事件测试</Div>
  </Div>
  <Div>
    2.p
    <P styli="w-100 bgRed">
      p标签
    </P>
  </Div>
  <Div>
    3.span
    <Div>
      <Span styli="w-100 bgRed">span</Span>
    </Div>
    4.h1-h6
    <Div>
      <H1 styli="red">test</H1>
      <H6>h6</H6>
    </Div>
    5.hr
    <Div>
      <Hr styli="bgred h-2" />
    </Div>
    6.a
    <Div>
      <A href="http://www.w3school.com.cn" target="_blank" styli="bgred h-2">www.baidu.com</A>
    </Div>
    7.Abbr
    <Div>
      The <Abbr styli="bgred" title="People's Republic of China">PRC</Abbr> was founded in 1949.
    </Div>
    8.Abbr
    <Div>
      <Acronym styli="bgred" title="World Wide Web">WWW</Acronym>
    </Div>
  </Div>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    divClick() {
      alert("事件测试")
    }
  },
}
</script>

<style>
#app {}
</style>
