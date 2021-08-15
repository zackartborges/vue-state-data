import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store/store";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://state-data.herokuapp.com";

Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
