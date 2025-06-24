<script setup>
import ServiceCard from '../components/ServiceCard.vue'

const servicios = [
  {
    title: 'ISO 45001',
    summary: 'Sistema de gestión de seguridad y salud en el trabajo.',
    details: `• Evaluamos riesgos laborales\n• Implementamos controles preventivos\n• Aseguramos cumplimiento normativo`,
    icon: '/img/iso45001.png'
  },
  {
    title: 'ISO 9001',
    summary: 'Gestión de calidad organizacional.',
    details: `• Mejora continua\n• Documentación de procesos\n• Auditorías internas y externas`,
    icon: '/img/iso45001.png'
  },
  {
    title: 'ISO 14001',
    summary: 'Gestión ambiental responsable.',
    details: `• Diagnóstico ambiental\n• Planificación de sostenibilidad\n• Control de residuos`,
    icon: '/img/iso45001.png'
  }
]
</script>

<template>
  <section class="p-8 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
    <ServiceCard
      v-for="(item, i) in servicios"
      :key="i"
      :title="item.title"
      :summary="item.summary"
      :details="item.details"
      :icon="item.icon"
    />
  </section>
</template>

