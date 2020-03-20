<template>
<div>
  <button @click="changeFilterCategory" :class="{ active:isActive}" :title="category.description">{{ category.icon }}</button>
</div>
</template>

<script>
import router from "../router/router.js"
export default {
  name: "Category",
  props: {
    category: Object
     },
  methods: {
    changeFilterCategory() {
        if(this.isActive==false){
          this.isActive = true
        } else {
          this.isActive = false
        }
        router.push("/").catch(err => {console.log(err)})
        this.$store.commit('addCategoryFilter', this.category.name)
    }
  },
  data() {
      return {
        isActive: false
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: none;
  padding: 5px;
  cursor: pointer;
  transition: background-color 1s;
}

button:hover{
  background-color: rgba(255,200,200,1);
}
button.active{
  background-color: rgba(255,200,200,1);
}
</style>
