<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "app",
  mounted() {
    // TODO: Expose first view
    if (this.$route.path == "/") {
      router.push("/main");
    }
  },
  components: {}
};
</script>

<style lang="scss">
body {
    background: #17223b;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#app {
    position: absolute;
    width: 100%;
    background: #17223b;
    border-radius: 2em;
}
</style>
