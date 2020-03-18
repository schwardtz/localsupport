<template>
  <div class="search">
    <input type="text" v-model="search" @keyup="changeFilterSearch" placeholder="stadt" />
  </div>
</template>

<script>
import store from "../vuex/store.js";
export default {
  name: "Search",
  methods: {
    changeFilterSearch() {
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
  border:none;
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,50%);
  width: 300px;
}
</style>
