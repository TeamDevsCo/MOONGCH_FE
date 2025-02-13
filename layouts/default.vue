<template>
  <v-app>
    <NavBar />
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet class="datagrid" rounded="lg">
              <slot />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<style lang="css" scoped>
.datagrid {
  margin-right: auto;
  margin-left: auto;
}
</style>
