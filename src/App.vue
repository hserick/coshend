<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="main-h-screen bg-pulse bg-gradient-to-br from-coshend-yellow via-white to-coshend-brown">
  <Navbar />
  <Router-view />
  </div>
</template>

<script setup>

</script>

<style scoped>
/* Puedes agregar animaciones personalizadas aquí si lo deseas */
</style>