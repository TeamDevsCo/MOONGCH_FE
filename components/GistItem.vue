<template>
  <v-container class="mch-content">
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="mch-card" variant="flat">
          <v-card-title>
            <NuxtLink
              :to="`/gist/${gist.id}`"
              class="text-decoration-none text-primary">
              {{ gist.title || "Untitled Gist" }}
            </NuxtLink>
          </v-card-title>

          <v-card-subtitle class="d-flex align-center">
            <v-avatar class="me-2" size="24">
              <v-img :src="gist.owner.avatar_url" alt="User Avatar"></v-img>
            </v-avatar>
            <span>@{{ gist.owner.username }}</span>
            <v-spacer></v-spacer>
            <span class="text-grey-darken-1 text-caption">
              {{ formatDate(gist.created_at) }}
            </span>
          </v-card-subtitle>

          <v-card-text>
            <p>{{ gist.description || "No description available." }}</p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-star</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-source-fork</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  gist: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};
</script>

<style lang="css" scoped>
.mch-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.mch-card {
  margin-bottom: 4px;
  border: solid 1px;
  border-color: #673ab7;
}
</style>
