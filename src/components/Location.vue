<template>
  <div class="location" :style="{ 'background-image': 'url(' + data.image + ')' }">
    <ul>
      <li>{{data.name}}</li>
      <li>{{data.contact}}</li>
      <li>{{data.categories}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Location",
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.location {
  padding: 20px;
  background-size: cover;
  transition: all 1s;
}
ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  color: white;
}
</style>
