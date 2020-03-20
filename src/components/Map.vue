<template>
  <div class="map">
    <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker v-for="location in locations" :key="location.name" :lat-lng="location.geolocation">
        <l-popup>
          <LocationContent :data="location" />
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
const LocationContent = () => import('./LocationContent.vue')

import { LMap, LTileLayer, LPopup } from "vue2-leaflet";
export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LPopup,
    LocationContent
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    locations() {
      return this.$store.getters.getFilteredLocations;
    }
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 5,
      center: [50.627542, 9.95845],
      bounds: null
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>

<style scoped>
.map {
    height: 60vh;
    min-height: 500px;
    width: 100%;
}
</style>
