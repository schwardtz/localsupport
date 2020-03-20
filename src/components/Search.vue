<template>
  <div class="search">
    <input type="text" v-model="search" @keyup="changeFilterSearch" placeholder="suche" />
    <button class="clear" @click="clearSearch">&times;</button>
  </div>
</template>

<script>
import store from "../vuex/store.js";
import router from "../router/router.js"

export default {
  name: "Search",
  methods: {
    changeFilterSearch() {
      router.push("/").catch(err => {console.log(err)})
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.locations {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

input {
  border: none;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 50%);
  width: 300px;
  position: relative;
  z-index: 0;
  background: rgba(255,255,255,0.3);
}

.search {
  position: relative;
  width: 300px;
  margin: 0 auto;
  margin-top: 15px;
}

.clear {
  position: absolute;
  right: 0px;
  background: none;
  border: none;
  font-size: 18px;
  height: 100%;
  display: inline-block;
  cursor: pointer;
  height: 35px;
  top: 0px;
  width: 35px;
  z-index: 1;
  opacity: 0.5;
}
</style>
