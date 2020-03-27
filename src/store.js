import Vue from 'vue'

// Vuex
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        breadcrumb: []
    },
})