<template>
  <div v-if="locationsLength>0">
    <transition-group name="list" tag="div" class="locations">
      <div v-for="location in locations" :key="location.name" class="location-item">
        <LocationContent :data="location" />
      </div>
    </transition-group>
  </div>
  <div v-else>
    <p class="noresult">Keine Suchergebnisse gefunden.</p>
  </div>
</template>


<script>
const LocationContent = () => import('./LocationContent.vue')

export default {
  name: "TheLocations",
  components: {
    LocationContent
  },
  computed: {
    locations() {
      return this.$store.getters.getFilteredLocations
    },
    locationsLength() {
      return this.$store.getters.getFilteredLocations.length
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.locations {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;
  max-width: 95vw;
  margin: 0 auto;
}

.noresult {
  color: rgba(80,80,80,1);
  padding: 100px;
}

.list {
  position: relative;
  backface-visibility: hidden;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-move {
  transition: all 1s;
}
@media screen and (min-width: 1200px){
  .list-leave-active {
    max-width: 19%;
  }
}
.list-leave-active {
    position: absolute;
    max-width: 95vw;
  }
</style>
