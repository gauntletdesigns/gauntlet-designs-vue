import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import {isEmpty} from 'lodash';

Vue.config.productionTip = false


import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebaseConfig from "../.firebase.conf.json"

if (isEmpty(process.env.FIREBASE_CONFIG)){

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
} else {
  const app = initializeApp(process.env.FIREBASE_CONFIG);
  const analytics = getAnalytics(app);
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
