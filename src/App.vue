<template>
  <div id="app">
    <LocalSupport />

    <footer>
      <address>
        <h2>Impressum</h2>
        Johannes Klinger <br/>
        Freihofstr. 16<br/>
        60385 Frankfurt<br/>
        <a href="mailto:mail@johannesklinger.com">mail</a>
      </address>
    </footer>
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
html,
body {
  background-color: rgb(240, 240, 250);
  /* background-color: #ffac81;
  background-image: linear-gradient(
    315deg,
    rgb(255, 146, 139) 0%,
    rgb(247, 210, 190) 74%
  ); */
  height: 100vh;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* max-width: 80vw; */
  margin: 0 auto;
  display: block;
  /* margin-top: 60px; */
}

p {
  font-size: 13px;
  color: white;
  padding: 0;
  margin-top: 5px;
}

h1 {
  text-transform: lowercase;
  color: white;
  margin-bottom: 0;
  margin-top: 0;
}

footer address {
  font-size: 12px;
  font-style:normal;
}

footer address h2 {
  margin-bottom: 5px;
  font-size: 12px;
}

footer address a {
  color: black;
}
</style>
