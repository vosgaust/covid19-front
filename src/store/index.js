import Vue from "vue";
import Vuex from "vuex";

// import graphs from "./modules/graphs";

Vue.use(Vuex);

const state = {
  graphs: []
};

export default new Vuex.Store({
  state,
  mutations: {
    addGraph(state, payload) {
      // TODO: this should be a push but we need to pass more info to identify the graph we are adding
      // so we can edit it later
      // state.graphs[0] = payload;
      // state.graphs.push(payload);
      Vue.set(state.graphs, 0, payload);
    }
  }
});
