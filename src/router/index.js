import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Servicios from '../views/Servicios.vue'
import SobreNosotros from "../views/Sobre-nosotros.vue";
import Contacto from '../views/Contacto.vue'

const routes = [
    { path: '/', component: Home },
    //{path: '/Home', component: Home},
    {path: '/Servicios', component: Servicios},
    {path: '/Contacto', component: Contacto},
    {path: '/Sobre-nosotros', component: SobreNosotros},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router