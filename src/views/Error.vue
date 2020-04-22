<template>
  <div class="error-view">
    <el-row type="flex" justify="center" align="middle">
      <h2>Something went wrong</h2>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <h3>
        Try again by clicking <el-link type="primary" @click="go">here</el-link>
      </h3>
    </el-row>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    go() {
      router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.error-view {
  margin-top: 200px;
}
</style>
