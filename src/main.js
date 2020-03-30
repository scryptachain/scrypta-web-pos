import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Buefy from 'buefy'
import './assets/style.scss'
import VueQrcodeReader from "vue-qrcode-reader";
import Gravatar from 'vue-gravatar';
import VueQrcode from 'vue-qrcode'

Vue.component('v-gravatar', Gravatar);
Vue.use(VueQrcodeReader)
Vue.component('vue-qrcode', VueQrcode)
Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
