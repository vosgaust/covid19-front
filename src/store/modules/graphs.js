const state = {
  graphs: [["test"]],
  mything: "mything"
};

export default {
  state,
  mutations: {
    addGraph(state, payload) {
      console.log(payload)
    //   state.graphs.push(payload);
    }
  }
};

