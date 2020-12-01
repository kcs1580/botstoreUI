<template>
  <div class="name-card">
    <v-card hover class="mx-auto" max-width="400">
      <v-card-text align="center">
        <v-chip color="primary" text-color="white">마케팅</v-chip
        ><v-chip color="primary" text-color="white">커머스</v-chip>

        <p class="display-1 text--primary mt-1">금지어 탐색</p>

        <v-layout d-inline-flex>
          <div>
            이미지 파일과 금지어를<br />
            입력하면 페이지내 여부와<br />
            위치를 체크해 주는...
          </div>

          <v-avatar class="ml-3" color="yellow" size="50">
            <div>FREE</div>
          </v-avatar>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-rating
          v-model="rating"
          readonly="true"
          background-color="black"
          :ripple="true"
          color="yellow"
          dense
          value="4"
        />(102)

        <v-spacer />
        <span class="downloads">
          <v-icon>mdi-download</v-icon>
          1,725
        </span>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {},

  data() {
    return {
      length: 5,
      rating: 3,
      readonly: false
    };
  },

  computed: {}
};
</script>

<style></style>
