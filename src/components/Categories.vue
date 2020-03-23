<template>
  <ul class="categories">
    <li v-for="category in categories" :key="category.name">
      <Category :category="category" />
    </li>
  </ul>
</template>


<script>
import CategoriesData from "../data/categories.json"
const Category =()=>import("./Category.vue")

export default {
  name: "Categories",
  props: {},
  components: {
    Category
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
</style>
