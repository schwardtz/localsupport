<template>
  <div class="map">
    <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="zoomLocation"
      @update:center="centerUpdated"
      @update:zoom="zoomUpdated"
      @update:bounds="boundsUpdated"
      ref="map"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <v-marker-cluster :options="{maxClusterRadius: 20, animate: false}">
        <l-marker
          v-for="location in locations"
          :key="location.name"
          :lat-lng="location.geolocation"
        >
          <l-icon
            :icon-size="dynamicSize"
            :icon-anchor="dynamicAnchor"
            :icon-url="getIconUrl(location.categories)"
          ></l-icon>
          <l-popup>
            <LocationContent :data="location" />
          </l-popup>
          <l-tooltip>{{location.name}}!</l-tooltip>
        </l-marker>
      </v-marker-cluster>
    </l-map>
  </div>
</template>

<script>
const LocationContent = () => import("./LocationContent.vue")

import { LMap, LTileLayer, LPopup, LIcon, LTooltip } from "vue2-leaflet"
const Vue2LeafletMarkerCluster =()=>import('vue2-leaflet-markercluster')

export default {
  name: "TheMap",
  components: {
    LMap,
    LTileLayer,
    LPopup,
    LIcon,
    LocationContent,
    LTooltip,
    'v-marker-cluster': Vue2LeafletMarkerCluster,
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
          if(this.$refs.map!=undefined) {
            return this.$refs.map.center
          } else {
            return this.initCenter;
          }
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
      iconSize: 30,
      initCenter:[50.627542, 9.95845],
      iconDefault:"./../assets/icons/icons8-marker-40.png",
      iconBook:"./../assets/icons/marker-book.png",
      iconBar:"./../assets/icons/marker-bar.png",
      iconEvent:"./../assets/icons/marker-event.png",
      iconFood:"./../assets/icons/marker-food.png",
      iconShop:"./../assets/icons/marker-shop.png",
      iconCreative:"./../assets/icons/marker-creative.png",
      iconCafe:"./../assets/icons/marker-cafe.png",
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      if (center.lat == this.initCenter[0] || this.zoomLocation[0] == this.initCenter[0] ) {
        this.zoom = 6;
      } else {
        this.zoom = 11;
      }
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    getIconUrl(categories) {
      if(categories.indexOf("buch")!=-1){
        return this.iconBook
      }
      if(categories.indexOf("event")!=-1){
        return this.iconEvent
      }
      if(categories.indexOf("shop")!=-1){
        return this.iconShop
      }
      if(categories.indexOf("bar")!=-1){
        return this.iconBar
      }
      if(categories.indexOf("cafe")!=-1){
        return this.iconCafe
      }
      if(categories.indexOf("creative")!=-1){
        return this.iconCreative
      }
      if(categories.indexOf("restaurant")!=-1){
        return this.iconFood
      }
      return this.iconDefault
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
