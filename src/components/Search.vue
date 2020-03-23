<template>
  <div class="search">
    <input type="text" v-model="search" @keyup="changeFilterSearch" placeholder="suchen" />
    <button class="clear" @click="clearSearch" v-if="remove">&times;</button>
    <router-link class="link" title="Zur Karte" to="/">
      <img src="./../assets/icons/icons8-map-marker-64.png" alt="Karte" />
    </router-link>
    <router-link class="link" title="Zur Übersicht" to="/overview">
      <img src="./../assets/icons/icons8-web-64.png" alt="Homepage" />
    </router-link>
  </div>
</template>

<script>
import store from "../vuex/store.js";
export default {
  name: "Search",
  methods: {
    changeFilterSearch() {
      store.commit("searchFilter", this.search);
    },
    clearSearch: function() {
      this.search = "";
      store.commit("searchFilter", this.search);
    }
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    remove() {
      return this.search.length > 0 ? true : false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.locations {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.link {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-top: 3px;
}

.link img {
  width: 100%;
  height: auto;
}

input {
  border: none;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 50%);
  width: 300px;
  position: relative;
  z-index: 0;
  background: rgba(255, 255, 255, 0.3);
  height: 40px;
}

@media screen and (max-width: 600px) {
  input {
    width: 100%;
  }
}

.search {
  position: relative;
  width: 400px;
  max-width: 80vw;
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
}

.clear {
  position: absolute;
  right: 98px;
  background: none;
  border: none;
  font-size: 18px;
  height: 100%;
  display: inline-block;
  cursor: pointer;
  height: 35px;
  top: 3px;
  width: 35px;
  z-index: 1;
  opacity: 0.5;
}

@media screen and (max-width: 600px) {
  .clear {
    right: 0;
  }
}
</style>
