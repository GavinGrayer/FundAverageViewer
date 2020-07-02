import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant'
import 'vant/lib/index.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
