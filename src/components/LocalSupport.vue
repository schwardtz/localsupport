<template>
  <div class="hello">
    <header>
      <h1>Support you local dealer</h1>
      <p>gutscheine für die gute zeit nach der schlechten zeit</p>
      <Search />
      <Categories v-on:category-locations="filterLocationsByCategory" />
    </header>
    <Locations />
  </div>
</template>

<script>
import Locations from "./Locations.vue";
import Categories from "./Categories.vue";
import Search from "./Search.vue";

export default {
  name: "LocalSupport",
  components: {
    Locations,
    Categories,
    Search
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
      console.log("test");
      this.filter = categoryName;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  background-image: url("./../assets/hero/hero.jpg");
  padding: 30px 0;
  background-position: center center;
  background-size: 100% auto;
  margin-bottom: 20px;
}
</style>
