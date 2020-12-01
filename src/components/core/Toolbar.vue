<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>Human2Bot</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        flat
        solo-inverted
        prepend-inner-icon="mdi-magnify"
        label="Search..."
        class="text-field"
      >
      </v-text-field>
      <v-spacer></v-spacer>

      <v-btn icon flat>
        <v-avatar size="42px">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
          />
        </v-avatar>
      </v-btn>
      <v-chip>RainbowBrain</v-chip>
    </v-toolbar>

    <navbar />
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      rating: null,
      dialog: false,
      dialogSettings: false,
      switchEmailNotification: true,
      showPassword: null,
      showPasswordConfirm: null,
      userEmail: null,
      password: null,
      passwordConfirm: null,
      error: false,
      showResult: false,
      result: "",
      items: [],
      notifications: []
    };
  },

  computed: {},
  methods: {}
};
</script>
<style>
.toolbar-menu-item {
  padding-left: 5px;
}
.v-input__control {
  margin-top: 5px;
}
div a {
  text-decoration: none;
}
.routers {
  display: flex;
  align-items: center;
}
</style>
