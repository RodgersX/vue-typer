import Vue from 'vue'
import App from './App.vue'
import vueTyperPlugin from 'vue-typer'

Vue.use(vueTyperPlugin)
Vue.config.productionTip = false

new Vue({
  vueTyperPlugin,
  render: h => h(App),
}).$mount('#app')
