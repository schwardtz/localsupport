<template>
<div>
  <button @click="changeFilterCategory" :class="{ active:isActive}" :title="category.description"  :style="{'border-color': category.color}"><span :style="{'background-color':category.color}"></span><img :src="'./../assets/icons/'+category.icon" :alt="'Icon '+category.description" width="24px" height="24px"/></button>
</div>
</template>

<script>
export default {
  name: "CategoryButton",
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
  width: 48px;
  height: 46px;
  background-color:rgba(255,255,255,0);
  border-bottom: 2px solid;
  position: relative;
}
button span {
    transition: opacity 1s;
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    opacity: 0;
}

button:hover span, button.active span{
  opacity: 1;
}

img {
  width: 24px;
  height: 24px;
  position: relative;
}
</style>
