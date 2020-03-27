import Vue from 'vue'

// Vue-router
import router from './router'

// Vuex
import store from './store'

// Ant Design
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
