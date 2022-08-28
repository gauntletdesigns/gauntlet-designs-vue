import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import {isEmpty} from 'lodash';

Vue.config.productionTip = false


import Notifications from 'vue-notification'
Vue.use(Notifications);

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebaseConfig from "../.firebase.conf.json"

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LdP6bQhAAAAAOkXOic7A7a2BCIEz3hB6WYwW9A-'),
  isTokenAutoRefreshEnabled: true
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
