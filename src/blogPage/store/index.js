import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";
import state from "./state";
import actions from "./actions";
Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.localStorage
    })
  ]
});
