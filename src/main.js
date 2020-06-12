import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
