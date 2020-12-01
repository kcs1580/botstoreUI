<template>
  <v-carousel cycle height="150" hide-delimiters>
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="src">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      src: require("../assets/carousel.jpg"),
      colors: ["indigo", "warning", "pink darken-2"],
      slides: ["First", "Second", "Third"]
    };
  }
};
</script>

<style></style>
