import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../registerServiceWorker";
import ElementUI from "element-ui";
import "lib-flexible";
import "element-ui/lib/theme-chalk/index.css";
import "../assets/css/normalize.css";
import "../assets/font/font.css";

import "../util/test";
import "../registerComponent";
import myFilters from "./filters";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
// use
Vue.use(myFilters);
Vue.use(mavonEditor);
Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
