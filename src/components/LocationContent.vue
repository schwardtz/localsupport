<template>
  <div class="location-container" >
    <address :style="{'background-color':color}">
      <h2>{{data.name}}</h2>
      <span>{{data.street}}</span>
      <span>{{data.city}}</span>
    </address>
      <content v-html="data.description"></content>
      <nav>
        <a
          rel="noopener nofollow noreferrer"
          target="_blank"
          v-if="data.website"
          :href="protocolAttachedWebsite"
          :title="'Website: '+data.name"
        >
          <img width="24px" height="24px" alt="Icon Website" src="./../assets/icons/icons8-website-64.png" />
        </a>
        <a
          rel="noopener nofollow noreferrer"
          v-if="data.email"
          title="Email schreiben"
          :href="'mailto:'+data.email"
        >
          <img width="24px" height="24px" alt="Icon Email schreiben" src="./../assets/icons/icons8-envelope-64.png" />
        </a>
        <a
          rel="noopener nofollow noreferrer"
          v-if="data.phone"
          title="Anrufen"
          :href="'tel:'+cleanedUpPhoneNumber"
        >
          <img width="24px" height="24px" alt="Icon Telefon" src="./../assets/icons/icons8-call-64.png" />
        </a>
        <a
          rel="noopener nofollow noreferrer"
          target="_blank"
          title="facebook"
          v-if="data.facebook"
          :href="data.facebook"
        >
          <img width="24px" height="24px" alt="Icon Facebook" src="./../assets/icons/icons8-facebook-64.png" />
        </a>
        <a
          rel="noopener nofollow noreferrer"
          target="_blank"
          title="Instagram"
          v-if="data.instagram"
          :href="data.instagram"
        >
          <img width="24px" height="24px" alt="Icon Instagram" src="./../assets/icons/icons8-instagram-64.png" />
        </a>
      </nav>
  </div>
</template>

<script>
export default {
  name: "LocationContent",
  props: {
    data: Object,
    color: String
  },
  computed: {
    protocolAttachedWebsite() {
      return this.data.website.indexOf("http")>-1?this.data.website.trim():"http://"+this.data.website.trim()
    },
    cleanedUpPhoneNumber() {
      return this.data.phone.replace(/\(|-|\)| |\./gi, "")
    },
  }
};
</script>

<style scoped>
.location-container {
  position: relative;
  transition: all 0.7s ease-out;
  outline: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

content {
  background-color: white;
  display: inline-block;
  padding: 15px 15px 0 15px;
  color: rgba(80, 80, 80, 1);
  font-size: 13px;
}

nav {
  align-self: flex-end;
  vertical-align: bottom;
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
}
address {
  height: 85px;
  text-transform: lowercase;
  text-align: left;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

address * {
  color: white;
}

a {
  text-decoration: none;
  font-size: 15px;
  width: 48px;
  height: 48px;
  text-align: center;
  display: inline-block;
}

h2 {
  margin: 0;
  color: white;
  font-size: 15px;
}

a img  {
  width: 24px;
  height: 24px;
  margin-top: 12px;
}
</style>