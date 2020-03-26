<template>
  <div class="content">
    <header>
      <div>
        <h1>
          <router-link to="/">Support your local Einzelhandel</router-link>
        </h1>
        <div class="search-desktop">
          <TheSearch />
          <TheCategories v-on:category-locations="filterLocationsByCategory" />
        </div>
      </div>
      <div>
        <p>
          Schön, dass du hier bist! Du führst ein Restaurant oder einen Shop und bietest aktuell Gutscheine an, nimmst Bestellungen entgegen, oder lieferst Waren aus? Das finden wir ziemlich großartig. Wenn du hier mit deinem Angebot gelistet werden möchtest, schreib uns einfach eine
          <a
            href="mailto:mail@johannesklinger.com"
          >Mail</a> mit Infos und Links zu deinem Angebot, oder füll unser
          <router-link to="contact">Formular</router-link> aus.
        </p>
        <p>
          Wenn euer Lieblingsgeschäft nicht dabei ist, ruft im Zweifel einfach dort an.
          <br />Unserer Erfahrung nach bieten sehr viele Shops und Restaurants außergewöhliche Lösungen für die aktuelle Situation an.
        </p>
      </div>
    </header>
    <div class="search-mobile">
      <TheSearch />
      <TheCategories v-on:category-locations="filterLocationsByCategory" />
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
const TheCategories = () => import("./TheCategories.vue");
const TheSearch = () => import("./TheSearch.vue");

export default {
  name: "TheLocalSupport",
  components: {
    TheCategories,
    TheSearch
  },
  props: {
    msg: String
  },
  data() {
    return {
      filter: {}
    };
  },
  methods: {
    filterLocationsByCategory(categoryName) {
      this.filter = categoryName;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-mobile {
  display: none;
}

@media screen and (max-width: 600px) {
  .search-mobile {
    display: block;
  }
  .search-desktop {
    display: none;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

header {
  padding: 30px 0 0;
  background-position: center center;
  background-size: cover;
  display: flex;
  margin: 0 auto;
  width: 80vw;
  margin-bottom: 20px;
}

@media screen and (max-width: 800px) {
  header {
    flex-direction: column;
  }
}

header > div {
  flex: 50%;
}
.content {
  min-height: 80vh;
}

@font-face {
  font-family: "bargain_demoregular";
  src: url("./../assets/fonts/webfontkit-20200322-162147/bargain_demo-webfont.woff2")
      format("woff2"),
    url("./../assets/fonts/webfontkit-20200322-162147/bargain_demo-webfont.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
}

h1 {
  color: rgba(255, 180, 180, 1);
  display: inline;
  font-family: "bargain_demoregular";
  text-shadow: 1px 1px 1px rgb(236, 2, 2);
}

h1 a,
h1 a:visited,
h1 a:active,
h1 a:focus {
  text-decoration: none;
  color: rgba(255, 180, 180, 1);
}

p {
  color: rgba(80, 80, 80, 1);
  margin: 20px 0 10px;
  text-align: justify;
  padding-left: 5px;
}

@media screen and (max-width: 800px) {
  p {
    margin-top: 10px;
  }
}

p a {
  border-bottom: 1px solid rgba(180, 180, 255, 1);
  text-decoration: none;
  color: rgba(180, 180, 255, 1);
}

p + p {
  margin-top: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
