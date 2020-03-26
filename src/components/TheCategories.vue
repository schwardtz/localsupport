<template>
  <ul class="categories">
    <li v-for="category in categories" :key="category.name">
      <CategoryButton :category="category" />
    </li>
    <li class="nav">
      <router-link class="link" title="Zur Karte" to="/">
        <img src="./../assets/icons/icons8-map-marker-64.png" alt="Karte" />
      </router-link>
    </li>
    <li>
      <router-link class="link" title="Zur Übersicht" to="/overview">
        <img src="./../assets/icons/icons8-web-64.png" alt="Homepage" />
      </router-link>
    </li>
  </ul>
</template>


<script>
import CategoriesData from "../data/categories.json";
const CategoryButton = () => import("./CategoryButton.vue");

export default {
  name: "TheCategories",
  props: {},
  components: {
    CategoryButton
  },
  data() {
    return {
      categories: CategoriesData
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
li {
  display: inline-block;
}

.nav {
  margin-left: 20px;
}
.link {
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-top: 3px;
  display: inline-block;
}

.link img {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 370px) {
  .link {
    display: none;
  }
}
</style>
