<template>
  <span
    :style="{ height, width: computedWidth }"
    class="LocationPlaceholder"
  />
</template>

<script>
export default {
  name: 'LocationPlaceholder',
  props: {
    maxWidth: {
      // The default maxiumum width is 100%.
      default: 100,
      type: Number,
    },
    minWidth: {
      // Lines have a minimum width of 80%.
      default: 80,
      type: Number,
    },
    height: {
      // Make lines the same height as text.
      default: '1em',
      type: String,
    },
    width: {
      // Make it possible to define a fixed
      // width instead of using a random one.
      default: null,
      type: String,
    },
  },
  computed: {
    computedWidth() {
      // Either use the given fixed width or
      // a random width between the given min
      // and max values.
      return this.width || `${Math.floor((Math.random() * (this.maxWidth - this.minWidth)) + this.minWidth)}%`;
    },
  },
};
</script>

<style >
.LocationPlaceholder {
  display: inline-block;
  vertical-align: middle;
  background-color: #DDDBDD;
}
</style>