<template>
<div>
  <button @click="changeFilterCategory" :class="{ active:isActive}">{{ category.icon }}</button>
</div>
</template>

<script>

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
}
button.active{
  background-color: rgba(200,200,200,1);
}
</style>
