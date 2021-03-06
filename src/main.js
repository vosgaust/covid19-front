import Vue from "vue";
// import ElementUI from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
