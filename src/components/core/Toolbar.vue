<template
  ><div>
    <v-app-bar>
      <v-toolbar>
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
      <v-container class="routers">
        <router-link to="/"><v-btn>BotStore</v-btn></router-link>
        <router-link to="/community"><v-btn>커뮤니티</v-btn></router-link>
        <router-link to="/download"><v-btn>자료실</v-btn></router-link>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
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
