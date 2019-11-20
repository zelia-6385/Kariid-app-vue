import Vue from "vue";
Vue.config.productionTip = false;

// Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// vue-float-label
import VueFloatLabel from "vue-float-label";
Vue.use(VueFloatLabel);

// App
import App from "./App.vue";
import store from "./store/store.js";

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
