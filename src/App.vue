<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {

    };
  },

  created() {

  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  width: 100vw;
}

.scroll {
  position: fixed;
  height: 500px !important;
}

.test {
  height: 100px;
  color: #fff;
  line-height: 100px;
}
.test:nth-child(2n) {
  background-color: red;
}
.test:nth-child(2n + 1) {
  background-color: black;
}
</style>
