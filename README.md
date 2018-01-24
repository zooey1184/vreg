# vreg

> A Vue.js project

### <font color=#C71585>使用方式</font>
```js
// main.js
import vreg from 'vreg'
vreg.use(Vue)

// 自定义指令
// template
<div v-reg:basic="{rule: 'c', msg: 'error3', tag: 'c', test: c}"></div>
<input  v-model="a" v-reg:basic="{rule: 'a', msg: 'error1', tag: 'a', test: a}">
<button  v-reg:basic.check="{check: switch}" @click="ck">click me</button>
// basic   分组
// rule    规则
// msg     提示信息
// tag     分组下的子项
// test    需校验的字段
// check   表示这个是触发校验的开关
// switch  true / false  需要异步执行  不然不生效
```


###### <font color=#e47128>【js使用方式】</font>

```js
import {check} from 'vreg/lib/rule.js'
export default {
  methods: {
    ck() {
      this.switch = true
      setTimeout(()=> {
        this.switch = false
      })
      if(check('basic')) {
        console.log('ok');
      }
    }
  }
}
```
