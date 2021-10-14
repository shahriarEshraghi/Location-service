import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from "vue2-google-maps"
import './assets/style.scss'
import router from './router'
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBDXjkWODnCbtaKmPvVF5uRlex0qi8g0Ys",
  },
  installComponents: true,
});



new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

