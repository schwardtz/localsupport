<template>
  <div class="location" :style="{ 'background-image': 'url(./../assets/cats/' + data.image + ')' }">
       <address>
      <h2>{{data.name}}</h2>
      <span>{{data.street}}</span>
      <span>{{data.city}}</span>
    </address>
    <content :style="{ 'background-image': 'url('+selectedImage+')', 'background-position':horizontalPosition+'% '+verticalPosition+'%'}">
      <p>{{data.description}}</p>
      <nav>
        <a
          rel="noopener nofollow noreferrer"
          target="_blank"
          v-if="data.website"
          :href="data.website"
          :title="'Website: '+data.name"
        ><img src="./../assets/icons/icons8-website-64.png" /></a>
        <a rel="noopener nofollow noreferrer" v-if="data.email" title="Email schreiben" :href="'mailto:'+data.email"><img src="./../assets/icons/icons8-envelope-64.png" /></a>
        <a rel="noopener nofollow noreferrer" v-if="data.phone" title="Anrufen" :href="'tel:'+data.phone"><img src="./../assets/icons/icons8-call-64.png" /></a>
        <a rel="noopener nofollow noreferrer" target="_blank" title="facebook" v-if="data.facebook" :href="data.facebook"><img src="./../assets/icons/icons8-facebook-64.png" /></a>
        <a rel="noopener nofollow noreferrer" target="_blank" title="Instagram" v-if="data.instagram" :href="data.instagram"><img src="./../assets/icons/icons8-instagram-64.png" /></a>
      </nav>
    </content>
  </div>
</template>

<script>
export default {
  name: "LocationContent",
  props: {
    data: Object
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

content {
  background-color: white;
  display: inline-block;
  padding: 20px 20px;
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