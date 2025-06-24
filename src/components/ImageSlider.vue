<template>
    <div class="relative over-flow-hidden rounded-lg shadow-md max-w-4xl mx-auto mt-8">
        <img
        :src="images[current].src"
        class="w-full h-64 object-cover transition-opacity duration-700"
        :alt="images[current].alt"
        />
        <!--texto superpuesto-->
        <div class="absolute bottom-0 left-0 right-0 bg-black/40 text-white px-6 py-4 backdrop-blur-sm">
            <h3 class="text-lg font-semibold">{{ images[current].title  }}</h3>
            <p class="text-sm">{{ images[current].description }}</p>
        </div>
        <!--controles-->
        <button
        @click="prev"
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white px-2 py-1 rounded-full text-gray-800">
        ◀
        </button>
        <button
        @click="next"
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white px-2 py-1 rounded-full text-gray-800">
        ▶
        </button>

        <!--Indicadores de puntos-->
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            <span
            v-for="(img, index) in images"
            :key="index"
            class="w-3 h-3 rounded-full cursor-pointer"
            :class="index === current ? 'bg-blue-700' : 'bg-white/60'"
            @click="goTo(index)"
            ></span>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue'
const base = import.meta.env.BASE_URL

const images = [
    {
        src: `${base}img/slider_1.jpg`,
        alt: 'Imagen 1',
        title: 'Título de la imagen 1',
        description: 'Descripción de la imagen 1'
    },
    {
        src: `${base}img/slider_2.jpg`,
        alt: 'Imagen 2',
        title: 'Título de la imagen 2',
        description: 'Descripción de la imagen 2'
    },
    {
        src: `${base}img/slider_3.jpg`,
        alt: 'Imagen 3',
        title: 'Título de la imagen 3',
        description: 'Descripción de la imagen 3'
    }
]

const current = ref(0)
let intervalId = null

function next(){
    current.value = (current.value + 1) % images.length
}

function prev(){
    current.value = (current.value - 1 + images.length) % images.length
}

function goTo(index){
    current.value = index
}

onMounted(()=> {
    intervalId = setInterval(next, 5000)
})

onBeforeUnmount(() => {
    clearInterval(intervalId)
})
</script>
