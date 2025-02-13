<script setup>
import { useRoute } from "vue-router";
import { gists } from "~/data/gists";

const route = useRoute();
const gist = gists.find((g) => g.id === route.params.id);
</script>

<template>
  <div v-if="gist">
    <h1>{{ gist.description }}</h1>
  </div>
</template>
