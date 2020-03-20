<template>
  <div class="location" :style="{ 'background-image': 'url(./../assets/cats/' + data.image + ')' }">
    <LocationContent :data="data"/>
  </div>
</template>

<script>
const LocationContent = () => import('./LocationContent.vue')

export default {
  name: "Location",
  props: {
    data: Object
  },
  components: {
    LocationContent
  },
  data() {
   return {
     backgroundImages: [
      './../assets/background/blob-shape_one.svg',
      './../assets/background/blob-shape_two.svg',
      './../assets/background/blob-shape_three.svg',
      './../assets/background/blob-shape_four.svg',
      './../assets/background/blob-shape_five.svg',
      './../assets/background/blob-shape_six.svg',
      './../assets/background/blob-shape_seven.svg',
      './../assets/background/blob-shape_eight.svg',
      './../assets/background/blob-shape_nine.svg'
    ],
    selectedImage: '',
    verticalPosition: '',
    horizontalPosition: '',
   } 
  },
  created () {
    const idx = Math.floor(Math.random() * this.backgroundImages.length);
    this.selectedImage = this.backgroundImages[idx]
    this.verticalPosition = Math.floor(Math.random() * (60 - 30 + 1)) + 30
    this.horizontalPosition = Math.round(Math.random() * 100)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.location {
  background-size: cover;
  transition: all 1s;
  position: relative;
  transition: all 0.3s ease-in;
  transform: scale(1);
  outline: none;
  height: 100%;
  box-shadow: 0 0 5px 0 rgba(80, 80, 80, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
content {
  background-color: white;
  display: inline-block;
  padding: 20px 20px 5px 20px;
  width: 100%;
  flex: 1;
  text-align: left;
  color: rgba(80, 80, 80, 1);
  font-size: 13px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-repeat: no-repeat;
  position: relative;
}

content::after {
  content: '';
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  left:0;
  top: 0;
  opacity: 0.93;
}


content p {
  flex-grow: 1;
}

nav {
  align-self: flex-end;
  vertical-align: bottom;
  position: relative;
  z-index: 1;
}
address {
  height: 85px;
  text-transform: lowercase;
  text-align: left;
  color: white;
  padding: 15px;
}

address span {
  display: inline-block;
  width: 100%;
  font-size: 13px;
}

p,
a {
  color: rgba(80, 80, 80, 1);
  display: inline-block;
  width: 100%;
  position: relative;
  z-index: 1;
}

a {
  text-decoration: none;
  width: auto;
  font-size:15px;
  width: 24px;
  height: 24px;
}

h2 {
  margin: 0;
  color: white;
  font-size: 15px;
}

svg {
  height: 12px;
  position: relative;
  top: 1px;
}
span {
  color: rgba(255,220 ,220 ,1);
}

a img {
  opacity: 0.7;
  transition: opacity 1s;
}

a:hover img{
  opacity: 1;
}

img {
  width: 20px;
  height: 20px;
}
</style>