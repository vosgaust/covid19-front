<template>
  <div id="graph-list">
    <Graph
      v-for="graph in graphs"
      v-bind:key="graph.test"
      v-bind:graph-data="graph"
    ></Graph>
  </div>
</template>

<script>
import Graph from "./Graph";
import { mapState } from "vuex";

export default {
  name: "graph-list",
  components: {
    Graph
  },
  async mounted() {},
  methods: {},
  computed: mapState({
    graphs: state => state.graphs
  }),
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
