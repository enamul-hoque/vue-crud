import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Grid
import { GridPlugin } from '@syncfusion/ej2-vue-grids';
Vue.use(GridPlugin);

// Init
new Vue({
  render: h => h(App),
}).$mount('#app');
