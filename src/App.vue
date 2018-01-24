<template>
  <div id="app">
    <input  v-model="a" v-reg:basic="{rule: 'a', msg: 'error1', tag: 'a', test: a}">
    <input  v-model="b" v-reg:basic="{rule: 'b', msg: 'error2', tag: 'b', test: b}">
    <input  v-model="c" v-reg:basic="{rule: 'c', msg: 'error3', tag: 'c', test: c}">
    <button type="button" name="button" v-reg:basic.check="{check: d}" @click="ck" style="{width: 100px; height: 40px}">click me</button>
  </div>
</template>

<script>
// import vload from '../dist/vload.js'
import {check} from '../src/lib/rule.js'

export default {
  name: 'app',
  data: ()=> ({
    a:'',
    b: '',
    c: '',
    d: false
  }),
  methods: {
    ck() {
      this.d = true
      setTimeout(()=> {
        this.d = false
      })
      if(check('basic')) {
        console.log('ok');
      }
    }
  },
  mounted() {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
