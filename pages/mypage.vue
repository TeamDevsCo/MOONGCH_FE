<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <!-- 프로필 카드 -->
        <v-card class="pa-6" elevation="2">
          <v-card-title class="text-h5">My Profile</v-card-title>

          <v-card-text>
            <!-- 프로필 아바타 -->
            <div class="text-center">
              <v-avatar size="100">
                <v-img :src="user.avatar" alt="User Avatar"></v-img>
              </v-avatar>
            </div>

            <!-- 사용자 정보 -->
            <v-list>
              <v-list-item>
                <v-list-item-title class="text-subtitle-1"
                  >Username</v-list-item-title
                >
                <v-list-item-subtitle>{{ user.username }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-subtitle-1"
                  >Email</v-list-item-title
                >
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-subtitle-1"
                  >Joined</v-list-item-title
                >
                <v-list-item-subtitle>{{
                  formatDate(user.joined_at)
                }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn color="primary" block @click="editProfile"
              >Edit Profile</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

// 사용자 데이터 (더미 데이터)
const user = ref({
  username: "moongch",
  email: "moongch@example.com",
  avatar: "https://placekitten.com/100/100",
  joined_at: "2024-01-15T12:00:00Z",
});

// 날짜 포맷 함수
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

// 프로필 수정 함수 (추후 추가 예정)
const editProfile = () => {
  alert("프로필 수정 기능은 아직 개발 중입니다!");
};
</script>

<style scoped>
.v-card {
  border-radius: 12px;
}
</style>
