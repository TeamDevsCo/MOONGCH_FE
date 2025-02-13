<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <Logo />
      <v-spacer></v-spacer>

      <!-- 검색창 -->
      <v-responsive max-width="260">
        <v-text-field
          class="me-4"
          density="compact"
          label="Search"
          rounded="lg"
          variant="solo-filled"
          flat
          hide-details="auto"
          single-line></v-text-field>
      </v-responsive>
      <!-- 모든 뭉치 탐색 -->
      <v-icon class="me-4" color="grey-darken-1" @click="goToHomePage">
        mdi-home
      </v-icon>
      <!-- 알림 버튼 + 팝업 리스트 -->
      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <v-icon
            v-bind="props"
            class="me-4"
            color="grey-darken-1"
            size="small">
            mdi-bell
          </v-icon>
        </template>
        <v-list>
          <v-list-item
            v-for="(notification, index) in notifications"
            :key="index">
            <v-list-item-title>{{ notification.message }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- 새뭉치 작성 -->
      <v-icon class="me-4" color="grey-darken-1" @click="goToNewPage">
        mdi-plus
      </v-icon>

      <!-- 마이페이지 -->
      <v-icon class="me-4" color="grey-darken-1" @click="goToMyPage">
        mdi-account
      </v-icon>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

// 더미 알림 데이터
const notifications = ref([
  { message: "새로운 Gist가 추가되었습니다!" },
  { message: "댓글이 달렸습니다." },
  { message: "새로운 팔로워가 생겼습니다." },
]);
const goToHomePage = () => {
  router.push("/");
};
const goToNewPage = () => {
  router.push("/new");
};

const goToMyPage = () => {
  router.push("/mypage");
};
</script>
