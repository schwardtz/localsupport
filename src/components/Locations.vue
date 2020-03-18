<template>
  <transition-group name="list" tag="div" class="locations">
    <div v-for="location in locations" :key="location.name">
      <Location :data="location" />
    </div>
  </transition-group>
</template>


<script>
import Location from "./Location.vue";

export default {
  name: "Locations",
  components: {
    Location
  },
  computed: {
    locations() {
      return this.$store.getters.getFilteredLocations;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.locations {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

@media screen and (max-width: 600px) {
  .locations{
    grid-template-columns: 1fr;

  }
}

.list {
    position:relative;
    backface-visibility: hidden;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-move {
  transition: all 1s;
}

.list-leave-active {
    position: absolute;
}

</style>
