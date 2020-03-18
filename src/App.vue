<template>
  <div id="app">
    <h1>Support you local dealer</h1>
    <p>gutscheine für die gute zeit nach der schlechten zeit</p>
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
html {
background-color: #ffac81;
background-image :linear-gradient(315deg,  rgb(255, 146, 139) 0%,rgb(247, 210, 190) 74%);
height: 100vh;
background-attachment: fixed;
}

*{
  box-sizing: border-box;
}
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

p {
  font-size: 13px;
  color:white;
  padding:0;
  margin-top: 5px;
}

h1{
  text-transform:lowercase;
  color: white;
  margin-bottom: 0;
}
</style>
