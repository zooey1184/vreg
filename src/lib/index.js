// 校验匹配
import {rule, update} from './rule.js'

export default (Vue) => {
  Vue.directive('reg', {
    bind: function(el, binding, vNode) {
      update(el, binding, vNode)
    },
    update: function(el, binding, vNode) {
      let m = binding.modifiers
      let arg = binding.arg
      let value = binding.value
      update(el, binding, vNode)
      if(!!window[arg]) {
        if(!!m.check) {
          if(!!value.check && (value.check==true || value.check=='true')) {
            let obj = window[arg]
            for(let [k, v] of obj.entries()) {
              if(v.va===false || v.va=='false') {
                if (!!window.vm) {
                  window.vm.$toast(v.msg || '请检查验证信息')
                }else {
                  if(!!window.insertToast) {
                    window.insertToast(v.msg)
                  }else {
                    console.log(v.msg);
                  }
                }
                return false
              }
            }
          }
        }
      }else {
        // window[arg] = null
        return
      }
    },
    unbind: function(el, binding, vNode) {
      let value = binding.value
      let m = binding.arg
      window[m] = null
    }
  })
}
