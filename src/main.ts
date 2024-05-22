import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css' 

// Import Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Use Vuetify
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify: new Vuetify(), // Adicione esta linha
  render: h => h(App)
}).$mount('#app')


