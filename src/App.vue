<template>
  <div id="app">
    <LocalSupport />
    <footer>
      <address>
        <h2>Impressum</h2>Johannes Klinger
        <br />Freihofstr. 16
        <br />60385 Frankfurt
        <br />Kontakt:
        <a href="mailto:mail@johannesklinger.com">E-Mail</a>
      </address>
      <a
        href="https://icons8.com/icons"
        title="Icons von icons8"
      >Alle Icons von https://icons8.com/icons</a><br />
      <a href="https://www.dafont.com/de/bargain.font" title="Font für Überschrift">Schriftart der Überschrift von https://www.dafont.com/de/bargain.font</a>
    </footer>
  </div>
</template>

<script>
const LocalSupport = () => import("./components/LocalSupport.vue");

export default {
  name: "App",
  components: {
    LocalSupport,
  },
};
</script>

<style>
html,
body {
  background-color: rgb(240, 240, 250);
  background-image: url("./assets/background/blob-shape.svg"), url("./assets/background/blob-shape_one.svg");
  background-repeat: no-repeat;
  background-position: -10vw 60vh, 80vw 10vh;
  height: 100vh;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
  color: rgba(80, 80, 80, 1);
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

footer {
  margin: 20px 0;
}

footer address {
  font-size: 12px;
  font-style: normal;
}

footer address h2 {
  margin-bottom: 5px;
  font-size: 12px;
}

footer a {
  color: black;
  font-size: 12px;
}

p {
  color: rgba(80, 80, 80, 1);
}

.leaflet-marker-icon {
  height: 30px!important;
}

.leaflet-popup-content-wrapper content {
  box-shadow: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.leaflet-pane .leaflet-popup-content {
  margin: 0;
}

.leaflet-pane .leaflet-popup-content div {
  border-radius: 12px;
}

.leaflet-pane .leaflet-popup-content content::after, .leaflet-pane address {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.leaflet-pane address {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.leaflet-tile-container{
  transition: all 1s;
}
</style>
