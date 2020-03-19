<template>
  <div class="location" :style="{ 'background-image': 'url(' + data.image + ')' }">
    <address>
      <h2>{{data.name}}</h2>
      <span>{{data.street}}</span>
      <span>{{data.city}}</span>
    </address>
    <content>
       <p> {{data.description}}</p>
       <a :href="data.contact" :title="data.name">{{data.name}}</a>
       <a v-if="data.email" :href="'mailto:'+data.email">E-Mail</a>
    </content>
  </div>
</template>

<script>
export default {
  name: "Location",
  props: {
    data: Object
  },
  data () {
  return {
    publicPath: process.env.BASE_URL
  }
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

.location:hover {
  /* transform: scale(1.03); */
  /* border-bottom:4px solid pink; */
}

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

p,a {
  color: rgba(80, 80, 80, 1);
  display: inline-block;
  width: 100%;
}

h2 {
  margin: 0;
  color: white;
  font-size: 15px;
}

</style>