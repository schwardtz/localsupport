<template>
  <div>
    <form action @submit="checkForm">
      <h3>Kontakt</h3>
      <ul class="notifications" v-if="notifications.length>0">
        <li v-for="notification in notifications" :key="notification.name">{{ notification }}</li>
      </ul>
      <small>*Pflichtfeld</small>
      <label for="name">Wie heißt euer Geschäft?*</label>
      <input type="text" v-model="name" name="name" />
      <label for="description">Was bietet ihr an?*</label>
      <textarea v-model="description" name="description"></textarea>
      <h3>Wie können Menschen mit euch in Kontakt treten?</h3>
      <div class="contact">
        <div class="column">
          <label for="email">E-Mail*</label>
          <input type="text" v-model="email" name="email" />
        </div>
        <div class="column">
          <label for="phone">Telefon-Nummer</label>
          <input type="text" v-model="phone" name="phone" />
        </div>
        <div class="column">
          <label for="street">Straße</label>
          <input type="text" v-model="street" name="street" />
        </div>
        <div class="column">
          <label for="city">PLZ & Stadt</label>
          <input type="text" v-model="city" name="city" />
        </div>
        <div class="column">
          <label for="website">Website</label>
          <input type="text" v-model="website" name="website" />
        </div>
        <div class="column">
          <label for="facebook">facebook</label>
          <input type="text" v-model="facebook" name="facebook" />
        </div>
        <div class="column">
          <label for="instagram">Instagram</label>
          <input type="text" v-model="instagram" name="instagram" />
        </div>
        <div class="column">
          <input type="submit" value="absenden" />
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import db from "./../firebase/db.js";

export default {
  name: "Contact",
  components: {},
  data() {
    return {
      notifications: [],
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
      image: ""
    };
  },
  computed: {
    putTogetherLocation: function() {
      return {
        name: this.name,
        website: this.website,
        email: this.email,
        phone: this.phone,
        facebook: this.facebook,
        instagram: this.instagram,
        description: this.description,
        street: this.street,
        city: this.city,
        categories: this.categories.split(","),
        image: this.image
      };
    }
  },
  methods: {
    putDataToFirestore(event) {
      event.preventDefault();
      db.collection("contacts")
        .doc(this.putTogetherLocation.email)
        .set(this.putTogetherLocation)
        .then(function() {
          console.log("Document successfully written!");
        });
    },
    checkForm: function(e) {
      e.preventDefault();
      this.notifications = [];
      if (!this.name) {
        this.notifications.push("Bitte sag uns euren Namen.");
      }
      if (!this.description) {
        this.notifications.push("Bitte schreib uns was ihr anbietet.");
      }
      if (!this.email) {
        this.notifications.push("Bitte nenne uns eure E-Mail.");
      }
      if (this.name && this.description && this.email) {
        this.putDataToFirestore(e);
        this.notifications.push(
          "Vielen Dank, wir prüfen Deine Daten so schnell wie möglich."
        );
        this.name = "";
        this.website = "";
        this.email = "";
        this.phone = "";
        this.facebook = "";
        this.instagram = "";
        this.description = "";
        this.street = "";
        this.city = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  display: inline-block;
  margin-bottom: 5px;
  width: 100%;
  font-size: 13px;
}

h3 {
  margin: 0;
  margin-bottom: 10px;
}
small {
  margin-bottom: 10px;
  display: inline-block;
  font-size: 10px;
}

input[type="text"],
textarea {
  display: inline-block;
  width: 100%;
  max-width: 300px;
  height: 40px;
  padding: 5px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  background-color: rgb(255, 255, 255, 0.5);
}
textarea {
  height: 100px;
}

form {
  margin: 0 auto;
  max-width: 600px;
}

.contact {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 20px;
  justify-content: center;
  grid-auto-rows: 1fr;
  margin: 0 auto;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 13px;
}

.column {
  vertical-align: middle;
}

input[type="submit"] {
  border: none;
  background: rgb(250, 248, 149);
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.5s;
  margin-top: 20px;
}
input[type="submit"]:hover {
  background-color: rgba(255, 200, 200, 1);
  align-self: center;
}

.notifications li  {
  color: rgba(180,180,255,1);
  font-weight: 600;
  font-size: 15px;
}
.notifications {

  border: 1px solid rgba(180,180,255,1);
  padding: 30px;
  margin-bottom: 10px;
}
</style>
