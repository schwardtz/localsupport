<template>
  <div id="app">
    <TheLocalSupport />
    <footer>
      <div>
        <h2>Unterstützenswerte Projekte</h2>
        <ul>
          <li>
            <a
              href="https://supportyourlocalbar.com/"
              title="Support your local bar"
            >support your local bar</a>
          </li>
          <li>
            <a href="http://helfen.berlin/" title="helfen.berlin">Helfen.Berlin</a>
          </li>
          <li>
            <a
              href="https://lokal-support.de/"
              title="DU FÜR DEINE *CLUBS, BARS UND CAFÉS IN STUTTGART"
            >Lokal* Support</a>
          </li>
          <li>
            <a href="https://pleasedontclose.com/" title="Please don't close">PleaseDon'tClose</a>
          </li>
          <li>
            <a href="https://www.stuttgartsindwir.de/" title="Stuttgart sind wir">Stuttgart sind wir</a>
          </li>
          <li>
            <a href="https://longlivetheblock.com/" title="Long Live The Block">Long live the block</a>
          </li>
        </ul>
      </div>
      <div>
        <address>
          <h2>Impressum</h2>Johannes Klinger
          <br />Freihofstr. 16
          <br />60385 Frankfurt
          <br />Kontakt:
          <a href="mailto:hallo@supportyourlocaleinzelhandel.de">E-Mail</a>
        </address>
        <a
          href="https://icons8.com/icons"
          title="Icons von icons8"
        >Alle Icons von https://icons8.com/icons</a>
        <br />
        <a href="https://www.dafont.com/de/bargain.font" title="Font für Überschrift">
          Schriftart der Überschrift von
          <br />https://www.dafont.com/de/bargain.font
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
const TheLocalSupport = () => import("./components/TheLocalSupport.vue");
// import {App} from './app'
// import 'firebase/firestore'


export default {
  name: "App",
  components: {
    TheLocalSupport
  }
};
</script>

<style>
html,
body {
  background-color: rgb(240, 240, 250);
  background-image: url("./assets/background/blob-shape.svg"),
    url("./assets/background/blob-shape_one.svg");
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

footer {
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  justify-content: center;
}

footer div {
  padding: 0 20px;
}

footer div ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

footer h2 {
  margin-bottom: 5px;
  font-size: 12px;
}

footer a {
  color: black;
  font-size: 12px;
  display: inline-block;
  margin-bottom: 5px;
}

p {
  color: rgba(80, 80, 80, 1);
}

.leaflet-marker-icon {
  height: 30px !important;
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

.leaflet-pane .leaflet-popup-content content::after {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.leaflet-pane address {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.leaflet-tile-container {
  transition: all 1s;
}

.map .marker-cluster-small {
  background-color: rgba(142, 209, 252, 0.6);
}
.map .marker-cluster-small div {
  background-color: rgba(142, 209, 252, 0.6);
}
.map .marker-cluster-medium {
  background-color: rgba(252, 185, 0, 0.6);
}
.map .marker-cluster-medium div {
  background-color: rgba(252, 185, 0, 0.6);
}
.map .marker-cluster-large {
  
  background-color: rgba(6, 147, 227,0.6);
}
.map .marker-cluster-large div {
  background-color: rgba(6, 147, 227,0.6);
}

.map .marker-cluster span {
  color: rgba(100, 100, 100, 1);
}

.map .leaflet-container a.leaflet-popup-close-button {
  color: white;
  height: 40px;
  width: 40px;
  line-height: 40px;
  padding: 0;
}

.map .leaflet-popup {
  margin-bottom: 40px;
  margin-left: 1px;
}

.map .leaflet-tooltip {
  margin-top: -24px;
}
</style>
