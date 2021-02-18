<template>
  <div class="search">
    <label for="suche">suche</label>
    <input type="text" v-model="search" @keyup="changeFilterSearch"  id="suche" />
    <button class="clear" @click="clearSearch" v-if="remove">&times;</button>
  </div>
</template>

<script>
import store from "../vuex/store.js";
export default {
  name: "TheSearch",
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
      search: ''
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

label {
  padding-left: 2px;
  font-size: 13px;
}

input {
  border: none;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 50%);
  width: 100%;
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
  right: 0;
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
