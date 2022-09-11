import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

import Notifications from "vue-notification";
Vue.use(Notifications);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../.firebase.conf.json";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
