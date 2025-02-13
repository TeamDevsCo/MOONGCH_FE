export const gists = [
  {
    id: "1",
    description: "Nuxt 3 프로젝트 설정",
    owner: {
      login: "user123",
      avatar_url: "https://avatars.githubusercontent.com/u/1234567?v=4",
    },
    files: {
      "nuxt.config.ts": {
        content: "export default defineNuxtConfig({});",
        language: "typescript",
      },
    },
    created_at: "2024-02-10T12:00:00Z",
  },
  {
    id: "2",
    description: "Vue 3 Composition API 예제",
    owner: {
      login: "dev456",
      avatar_url: "https://avatars.githubusercontent.com/u/7654321?v=4",
    },
    files: {
      "example.vue": {
        content:
          "<script setup> import { ref } from 'vue'; const count = ref(0); </script>",
        language: "vue",
      },
    },
    created_at: "2024-02-09T10:30:00Z",
  },
];
