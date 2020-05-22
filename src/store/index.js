import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    addTaskMut(state, payload) {
      state.tasks.push(payload);
    },
    delTaskMut(state, payload) {
      state.tasks.splice(payload, 1)
    }
  },
  actions: {

  },
  modules: {},
});
