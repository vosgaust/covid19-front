<template>
  <div id="main-view">
    <Selection></Selection>
    <GraphList></GraphList>
  </div>
</template>

<script>
import GraphList from "@/components/GraphList.vue";
import Selection from "@/components/Selection.vue";

export default {
  name: "main-view",
  components: {
    GraphList,
    Selection
  },
  data() {
    return {};
  }
};
</script>
