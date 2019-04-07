// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Axios from 'axios'
import router from './router/router'



// Vue.prototype.$axios=Axios
Vue.config.productionTip = false
Vue.prototype.Host='/baidu_music_api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
