<template>
  <div class="map">
    <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="zoomLocation"
      :options="mapOptions"
      @update:center="centerUpdated"
      @update:zoom="zoomUpdated"
      @update:bounds="boundsUpdated"
      ref="map"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <v-marker-cluster :options="{ maxClusterRadius: 20, animate: false }">
        <l-circle-marker
          v-for="location in locations"
          :key="location.name"
          :lat-lng="location.geolocation"
          :radius="circle.radius"
          :color="getMarkerColor(location.categories)"
          :fillColor="getMarkerColor(location.categories)"
          :fillOpacity="circle.fillOpacity"
          ref="marker"
          lazy
        >
          <l-popup lazy>
            <LocationContent :data="location" :color="getMarkerColor(location.categories)" />
          </l-popup>
          <l-tooltip :options="tooltipOptions">{{ location.name }}!</l-tooltip>
        </l-circle-marker>
      </v-marker-cluster>
    </l-map>
  </div>
</template>

<script>
const LocationContent = () => import("./LocationContent.vue");

import {
  LTileLayer,
  LMap,
  LPopup,
  LTooltip,
  LCircleMarker,
} from "vue2-leaflet";
import CategoriesData from "../data/categories.json";
const Vue2LeafletMarkerCluster = () => import("vue2-leaflet-markercluster");
export default {
  name: "TheMap",
  components: {
    LMap,
    LTileLayer,
    LPopup,
    LocationContent,
    LTooltip,
    LCircleMarker,
    "v-marker-cluster": Vue2LeafletMarkerCluster,
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
        if (this.$refs.map != undefined) {
          return this.$refs.map.center;
        } else {
          return this.initCenter;
        }
      }
    },
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 6,
      bounds: null,
      tooltipOptions: {
        offset: [0, 24],
      },
      initCenter: [50.627542, 9.95845],
      mapOptions: {
        zoomSnap: 0.5,
        preferCanvas: true,
      },
      circle: {
        radius: 6,
        fillOpacity: 1
      },
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      colorDefault : "#6ddccf",
      colorFood: CategoriesData[0].color,
      colorShop: CategoriesData[1].color,
      colorEvent: CategoriesData[2].color,
      colorBar: CategoriesData[3].color,
      colorCafe: CategoriesData[4].color,
      colorCreative: CategoriesData[5].color,
      colorBook: CategoriesData[6].color,
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
      if (this.$refs.marker != undefined) {
        if (this.$refs.marker.length === 1) {
          this.$refs.marker[0].mapObject.openPopup();
        }
      }
    },
    centerUpdated(center) {
      if (
        center.lat == this.initCenter[0] ||
        this.zoomLocation[0] == this.initCenter[0]
      ) {
        this.zoom = 6;
      } else {
        this.zoom = 11;
      }
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    getMarkerColor(categories) {
      if (categories.indexOf("buch") != -1) {
        return this.colorBook;
      }
      if (categories.indexOf("event") != -1) {
        return this.colorEvent;
      }
      if (categories.indexOf("shop") != -1) {
        return this.colorShop;
      }
      if (categories.indexOf("bar") != -1) {
        return this.colorBar;
      }
      if (categories.indexOf("cafe") != -1) {
        return this.colorCafe;
      }
      if (categories.indexOf("creative") != -1) {
        return this.colorCreative;
      }
      if (categories.indexOf("restaurant") != -1) {
        return this.colorFood;
      }
    },
  },
};
</script>

<style scoped>
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

.leaflet-popup-content {
  margin: 0;
}
</style>
