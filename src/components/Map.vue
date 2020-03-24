<template>
  <div class="map">
    <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="zoomLocation"
      :zoomAnimation="true"
      @update:center="centerUpdated"
      @update:zoom="zoomUpdated"
      @update:bounds="boundsUpdated"
      ref="map"
    >
      <l-tile-layer :url="url"></l-tile-layer>
        <v-marker-cluster :options="{maxClusterRadius: 20}">

      <l-marker v-for="location in locations" :key="location.name" :lat-lng="location.geolocation">
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="./../assets/icons/icons8-marker-40.png"
        ></l-icon>
        <l-popup>
          <Location :data="location" />
        </l-popup>
        <l-tooltip>{{location.name}}!</l-tooltip>
      </l-marker>
        </v-marker-cluster>
    </l-map>
  </div>
</template>

<script>
const Location = () => import("./Location.vue")

import { LMap, LTileLayer, LPopup, LIcon, LTooltip } from "vue2-leaflet"
const Vue2LeafletMarkerCluster =()=>import('vue2-leaflet-markercluster')

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LPopup,
    LIcon,
    Location,
    LTooltip,
    'v-marker-cluster': Vue2LeafletMarkerCluster
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    locations() {
      return this.$store.getters.getFilteredLocations;
    },
    zoomLocation() {
      if (this.$store.getters.getZoomLocation) {
        return this.$store.getters.getZoomLocation.geolocation;
      } else {
        return [50.627542, 9.95845];
      }
    },
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 6,
      bounds: null,
      iconSize: 30
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = [center.lat, center.lng];
      if (center.lat == "50.627542" || this.zoomLocation[0] == "50.627542" ) {
        this.zoom = 6;
      } else {
        this.zoom = 11;
      }
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>

<style scoped>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.map {
  height: 70vh;
  min-height: 500px;
  width: 100%;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.leaflet-marker-icon {
  height: 30px !important;
}

.leaflet-popup-content-wrapper content {
  box-shadow: none;
}

.leaflet-popup-content {
  margin: 0;
}
</style>
