<template>
  <v-container>
    <div class="filter">
      <v-btn rounded color="primary" dark>검색 초기화</v-btn><br /><br />
      <h3>평점</h3>
      <v-rating /><br />
      <h3>다운로드</h3>
      <input />이상<br />
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
        >
          <v-list-item-content>
            <h3><v-list-item-title v-text="item.title"></v-list-item-title></h3>
          </v-list-item-content>
          <br />
          <v-list-item v-for="child in item.items" :key="child.title">
            <v-list-item-content>
              <input type="checkbox" id="checkbox" v-model="checked" />
              <label for="checkbox">{{ child.title }}</label
              ><br />
            </v-list-item-content> </v-list-item
          ><br />
        </v-list-group>
        <br
      /></v-list>

      <h3>추천 키워드</h3>
      <v-chip>#재무</v-chip><v-chip>#OCR</v-chip><br />
      <h3>키워드 검색</h3>
      <v-chip>#유용한</v-chip><v-chip>#재무용</v-chip> <v-chip>#엑셀</v-chip
      ><v-chip>#반복처리</v-chip>
      <v-chip>#OCR</v-chip>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        active: true,
        items: [
          { title: "카테고리1" },
          { title: "카테고리1" },
          { title: "카테고리1" },
          { title: "카테고리1" }
        ],
        title: "카테고리 (100)"
      },
      {
        active: true,
        items: [
          { title: "카테고리1" },
          { title: "카테고리1" },
          { title: "카테고리1" },
          { title: "카테고리1" }
        ],
        title: "비즈니스 (100)"
      },
      {
        items: [
          { title: "카테고리1" },
          { title: "카테고리1" },
          { title: "카테고리1" },
          { title: "카테고리1" }
        ],
        title: "응용프로그램 (100)"
      }
    ]
  })
};
</script>

<style>
input {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 5px;
}
.filter {
  text-align: center;

  width: 260px;
  background: white;
}
</style>
