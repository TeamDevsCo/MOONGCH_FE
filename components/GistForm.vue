<template>
  <v-card class="pa-6 mb-4" elevation="2">
    <v-card-title class="text-h5">Create a New Gist</v-card-title>

    <v-card-text>
      <v-form ref="form">
        <!-- Gist 제목 -->
        <v-text-field
          v-model="gist.title"
          label="Gist Title"
          variant="outlined"
          required></v-text-field>

        <!-- Gist 설명 -->
        <v-textarea
          v-model="gist.description"
          label="Description"
          variant="outlined"
          required></v-textarea>

        <!-- 코드 입력 -->
        <v-textarea
          v-model="gist.code"
          label="Code"
          variant="outlined"
          auto-grow
          required></v-textarea>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="submitGist">Create Gist</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useGistStore } from "@/store/gist";

const gistStore = useGistStore();
const form = ref(null);
const gist = ref({
  title: "",
  description: "",
  code: "",
});

const submitGist = () => {
  if (!gist.value.title || !gist.value.code) {
    alert("Title and Code are required!");
    return;
  }

  gistStore.addGist({
    id: Date.now(),
    title: gist.value.title,
    description: gist.value.description,
    code: gist.value.code,
    owner: { username: "moongch", avatar_url: "https://placekitten.com/50/50" },
    created_at: new Date().toISOString(),
  });

  // 폼 초기화
  gist.value = { title: "", description: "", code: "" };
};
</script>
