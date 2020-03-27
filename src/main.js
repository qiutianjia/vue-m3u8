import Vue from 'vue'

// Vue-router
import router from './router'

// Ant Design
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

// Vuex
import Vuex from 'vuex'
Vue.use(Vuex);

import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
