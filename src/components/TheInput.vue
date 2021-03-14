<template>
  <div>
    <form action>
      <input type="text" v-model="name" name="name" placeholder="name" />
      <br />
      <input
        type="text"
        v-model="website"
        name="website"
        placeholder="website"
      />
      <br />
      <input type="text" v-model="email" name="email" placeholder="email" />
      <br />
      <input type="text" v-model="phone" name="phone" placeholder="phone" />
      <br />
      <input
        type="text"
        v-model="facebook"
        name="facebook"
        placeholder="facebook"
      />
      <br />
      <input
        type="text"
        v-model="instagram"
        name="instagram"
        placeholder="instagram"
      />
      <br />
      <textarea v-model="description" name="description"></textarea>
      <br />
      <input type="text" v-model="street" name="street" placeholder="street" />
      <br />
      <input type="text" v-model="city" name="city" placeholder="city" />
      <br />
      <input type="text" v-model="location" name="location" placeholder="location" />
      <br />
      <input
        type="text"
        v-model="categories"
        name="categories"
        placeholder="categories"
      />
      <br />
      <input type="text" v-model="image" name="image" placeholder="image" />
      <br />
      <input type="submit" @click="putDataToFirestore" />
    </form>
    aa
    {{ putTogetherLocation }}
    bb
  </div>
</template>


<script>
import db from "./../firebase/db.js";

export default {
  name: "TheInput",
  components: {},
  data() {
    return {
      name: "",
      website: "",
      email: "",
      phone: "",
      facebook: "",
      instagram: "",
      description: "",
      street: "",
      city: "",
      categories: "",
      image: "",
      location: "",
    };
  },
  computed: {
    putTogetherLocation: function () {
      return {
        name: this.name.trim(),
        website: this.website.trim(),
        email: this.email.trim(),
        phone: this.phone.trim(),
        facebook: this.facebook.trim(),
        instagram: this.instagram.trim(),
        description: this.description.trim(),
        street: this.street.trim(),
        city: this.city.trim(),
        categories: this.categories.split(","),
        image: this.image.trim(),
        location: this.location,
      };
    },
  },
  methods: {
    putDataToFirestore(event) {
      event.preventDefault();
      const locationToSend = this.putTogetherLocation;

      db.reference(
        "locations/" +
          new Date().toUTCString() +
          "-" +
          this.putTogetherLocation.email
      )
        .set(locationToSend)
        .then(function () {
          console.log(locationToSend);
          console.log("Document successfully written!");
        });

      this.name = "";
      this.website = "";
      this.email = "";
      this.phone = "";
      this.facebook = "";
      this.instagram = "";
      this.description = "";
      this.street = "";
      this.city = "";
      this.location ="";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
