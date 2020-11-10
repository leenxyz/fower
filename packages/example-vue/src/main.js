import Vue from 'vue'
import styliVue from '@styli/vue'
import App from './App.vue'
import { createStyle, css, styli } from '@styli/core'
import preset from '@styli/preset-default'

console.log('----createStyle:', createStyle('p1 m-20'))

styli.setup(preset)

Vue.config.productionTip = false

Vue.use(styliVue)

Vue.directive('css', {
  bind: (el, bind) => {
    const props = {}

    for (const { name, value } of Object.values(el.attributes)) {
      props[name] = value === '' ? true : value
    }

    const value = bind.value || ''

    value.split(/\s+/).forEach((i) => {
      props[i] = true
    })

    console.log('css:', css('p2'))
    console.log('props:', props)
    console.log('createStyle:', createStyle('p-20 m2'))
    const styles = createStyle(Object.keys(props).join(' '))

    console.log('styles:', styles)

    for (const key in styles) {
      el.style[key] = styles[key]
    }
  },
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
