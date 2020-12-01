<template>
  <div class="name-card">
    <v-card class="mx-auto" max-width="300">
      <v-card-text align="center">
        <v-chip>마케팅</v-chip><v-chip>커머스</v-chip>
        <p class="display-1 text--primary">
          금지어 탐색
        </p>

        <div class="text--primary">
          이미지 파일과 금지어를<br />
          입력하면 페이지내 여부와<br />
          위치를 체크해 주는...
        </div>
        <v-avatar color="yellow" size="50">
          <div>FREE</div>
        </v-avatar>
      </v-card-text>
      <v-card-actions>
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
