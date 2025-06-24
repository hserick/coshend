<template>
    <nav class="bg-amber-800 shadow-md px-6 py-4 flex justify-between items-center">
        <div class="text-white font-semibold text-xl">
            COSHEND Consultoría
        </div>
        <ul class="hidden md:flex gap-6 text-white font-medium">
            <li><router-link to="/" class="hover:text-gray-400">Inicio</router-link></li>
            <li><router-link to="/servicios" class="hover:text-gray-400">Servicios</router-link></li>
            <li><router-link to="/sobre-nosotros" class="hover:text-gray-400">Sobre nosotros</router-link></li>
            <li><router-link to="/contacto" class="hover:text-gray-400">Contacto</router-link></li>
        </ul>

        <button @click="toggleMenu" class="md:hidden text-gray-600 text-2xl focus:outline-none">
            ☰
        </button>

        <transition name="fade">
            <ul v-if="mobileMenuOpen" class="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center py-4 gap-4 text-gray-600 font-medium z-10 md:hidden">
                <li><RouterLink @click="closeMenu" to="/home" class="hover:text-blue-700">Inicio</RouterLink></li>
                <li><RouterLink @click="closeMenu" to="/Servicios" class="hover:text-blue-700">Servicios</RouterLink></li>
                <li><RouterLink @click="closeMenu" to="/Sobre-nosotros" class="hover:text-blue-700">Sobre nosotros</RouterLink></li>
                <li><RouterLink @click="closeMenu" to="/Contacto" class="hover:text-blue-700">Contacto</RouterLink></li>
            </ul>
        </transition>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const mobileMenuOpen = ref(false)

function toggleMenu(){
    mobileMenuOpen.value = !mobileMenuOpen.value 
}

function closeMenu(){
    mobileMenuOpen.value = false
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active{
    transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to{
    opacity: 0;
}
</style>