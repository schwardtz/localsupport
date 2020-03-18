<template>
  <div class="search">
    <input type="text" v-model="search" @keyup="changeFilterName" />
  </div>
</template>

<script>
import store from "../vuex/store.js";
export default {
  name: "Search",
  methods: {
    changeFilterName() {
      store.commit("searchNameFilter", this.search);
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
  border-bottom: 1px solid black;
  width: 300px;
}
</style>
