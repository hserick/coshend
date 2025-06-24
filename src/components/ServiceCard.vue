<template>
  <div
    class="w-full h-64 perspective"
    @click="flipped = !flipped"
  >
    <div
      class="relative w-full h-full transition-transform duration-700 transform-style"
      :class="{ 'rotate-y-180': flipped }"
    >
      <!-- Frente -->
      <div
        class="absolute w-full h-full backface-hidden bg-gray-200 p-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center text-center"
      >
        <img :src="icon" alt="Ícono" class="w-10 h-10 mb-2" />
        <h3 class="text-xl font-bold text-blue-700 mb-1">{{ title }}</h3>
        <p class="text-gray-600 text-sm">{{ summary }}</p>
      </div>

      <!-- Reverso -->
      <div
        class="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-100 p-4 rounded shadow-lg flex flex-col justify-center text-gray-600 text-sm text-left overflow-auto"
      >
        <h3 class="text-lg font-semibold text-blue-700 mb-2">Detalles</h3>
        <p class="whitespace-pre-line leading-relaxed">{{ details }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['title', 'summary', 'details', 'icon'])
const flipped = ref(false)
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}
.transform-style {
  transform-style: preserve-3d;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
