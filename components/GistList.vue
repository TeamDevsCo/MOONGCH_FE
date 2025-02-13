<template>
  <v-container>
    <v-row>
      <v-col v-for="gist in gistStore.gists" :key="gist.id" cols="12">
        <GistItem :gist="gist" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useGistStore } from "@/store/gist";
import GistItem from "@/components/GistItem.vue";

const gistStore = useGistStore();
</script>

<style lang="css" scoped></style>
