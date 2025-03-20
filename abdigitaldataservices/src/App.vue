<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>AB Digital Data Services</v-app-bar-title>
    </v-app-bar>

    <v-bottom-navigation>
      <v-btn value="home" to="/">
        <v-icon>mdi-home-circle</v-icon>
        <span>Home</span>
      </v-btn>

      <v-btn value="about" to="/about">
        <v-icon>mdi-information</v-icon>
        <span>About</span>
      </v-btn>
    </v-bottom-navigation>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    
    
  </v-app>
</template>

<style scoped>

</style>
