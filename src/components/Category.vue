<template>
<div>
  <button @click="changeFilterCategory" :class="{ active:isActive}" :title="category.description"><img :src="'./../assets/icons/'+category.icon" :alt="'Icon '+category.description"/></button>
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
  cursor: pointer;
  transition: background-color 1s;
  width: 40px;
  background-color:rgba(255,255,255,0);
}

button:hover{
  background-color: rgba(255,200,200,1);
}
button.active{
  background-color: rgba(255,200,200,1);
}

img {
  width: 24px;
  height: 24px;
}
</style>
