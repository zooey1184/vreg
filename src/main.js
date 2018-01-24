import Vue from 'vue'
import App from './App.vue'
import vreg from '../src/lib/index.js'
vreg(Vue)
new Vue({
  el: '#app',
  render: h => h(App)
})
