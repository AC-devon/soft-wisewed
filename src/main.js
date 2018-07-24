import './firebaseConfig.js';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VTooltip from "v-tooltip";
import VueConfetti from "vue-confetti";
import VueFire from "vuefire";

Vue.use(VueConfetti);
Vue.use(VTooltip);
Vue.use(VueFire);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
