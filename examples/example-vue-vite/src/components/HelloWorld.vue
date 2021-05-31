<template>
  <h1 class="bgRed200" blue300 v-css>{{ msg }}</h1>
  <h1 toCenter bgGreen300 square-200 v-css>Fower</h1>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String,
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
