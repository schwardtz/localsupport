<template>
  <div id="app">
    <h1>Support you local dealer</h1>
    <LocalSupport />
  </div>
</template>

<script>
import LocalSupport from "./components/LocalSupport.vue";

export default {
  name: "App",
  components: {
    LocalSupport
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 80vw;
  margin: 0 auto;
  display: block;
  margin-top: 60px;
}

h1{
  text-transform:lowercase;
  
}
</style>
