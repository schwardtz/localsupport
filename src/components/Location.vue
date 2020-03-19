<template>
  <div class="location" :style="{ 'background-image': 'url(./../assets/cats/' + data.image + ')' }">
    <address>
      <h2>{{data.name}}</h2>
      <span>{{data.street}}</span>
      <span>{{data.city}}</span>
    </address>
    <content>
      <p>{{data.description}}</p>
      <nav>
        <a
          rel="noopener nofollow noreferrer"
          target="_blank"
          v-if="data.website"
          :href="data.website"
          :title="'Website: '+data.name"
        >🌐</a>
        <a rel="noopener nofollow noreferrer" v-if="data.email" title="Email schreiben" :href="'mailto:'+data.email">✉️</a>
        <a rel="noopener nofollow noreferrer" v-if="data.phone" title="Anrufen" :href="'tel:'+data.phone">☎️</a>
        <a rel="noopener nofollow noreferrer" target="_blank" title="facebook" v-if="data.facebook" :href="data.facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
            />
          </svg>
        </a>
        <a rel="noopener nofollow noreferrer" target="_blank" title="Instagram" v-if="data.instagram" :href="data.instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        </a>
      </nav>
    </content>
  </div>
</template>

<script>
export default {
  name: "Location",
  props: {
    data: Object
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

content p {
  flex-grow: 1;
}

nav {
  align-self: flex-end;
  vertical-align: bottom;
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
}

a {
  text-decoration: none;
  width: auto;
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
</style>