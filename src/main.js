import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// Grid
import { GridPlugin } from '@syncfusion/ej2-vue-grids';
Vue.use(GridPlugin);

// Noty
import VueNoty from 'vuejs-noty';
Vue.use(VueNoty, {
  layout: 'bottomRight'
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
