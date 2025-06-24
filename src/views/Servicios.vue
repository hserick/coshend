<script setup>
import ServiceCard from '../components/ServiceCard.vue'

const base = import.meta.env.BASE_URL

const servicios = [
  {
    title: 'NOM-002-STPS-2010',
    summary: 'Condiciones de seguridad-Prevención y protección contra incendios en los centros de trabajo.',
    details: 'Determinar el Grado de Riesgo de Incendio, así como las medidas de seguridad necesarias para cada riesgo determinado en cada uno de los centros de trabajo y áreas evaluadas.',
    icon: `${base}img/servicios/nom-002-stps-2010.png`
  },
  {
    title: 'NOM-004-STPS-1999',
    summary: 'Sistemas de protección y dispositivos de seguridad en la maquinaria y equipo que se utilice en los centros de trabajo.',
    details: 'Determinar el tipo de daño, su gravedad y probabilidad de ocurrencia, en función de las partes en movimiento, generación de temperaturas extremas, electricidad estática, superficies cortantes, proyección de partículas.',
    icon: `${base}img/servicios/nom-004-stps-1999.png`
  },
  {
    title: 'NOM-005-STPS-1998',
    summary: 'Condiciones de seguridad e higiene en los centros de trabajo para el manejo, transporte y almacenamiento de sustancias químicas peligrosas.',
    details: 'Elaborar un estudio de riesgo potencial en las áreas del centro de trabajo donde se maneje, transporte y almacene sustancias químicas peligrosas que puedan afectar la salud de los trabajadores y la integridad física de las instalaciones.',
    icon: `${base}img/servicios/nom-005-stps-1998.png`
  },
  {
    title: 'NOM-006-STPS-2014',
    summary: 'Manejo y almacenamiento de materiales, condiciones y procedimientos de seguridad.',
    details: 'Analizar los riesgos potenciales a los que están expuestos los trabajadores por el manejo de materiales en forma manual o con ayuda de maquinaria.',
    icon: `${base}img/servicios/nom-006-stps-2014.png`
  },
  {
    title: 'NOM-009-STPS-2011',
    summary: 'Condiciones de seguridad para realizar trabajos en altura.',
    details: 'Realizar una revisión de las condiciones que prevalecen en las áreas donde realizan trabajos en altura.',
    icon: `${base}img/servicios/nom-009-stps-2011.png`
  },
  {
    title: 'NOM-011-STPS-2001',
    summary: 'Condiciones de Seguridad e higiene en los centros de trabajo donde se genere ruido.',
    details: 'Evaluar las áreas de trabajo donde se genere ruido y determinar si es capaz de alterar la salud de los trabajadores con base a sus características, niveles y tiempo de exposición.',
    icon: `${base}img/servicios/nom-011-stps-2001.png`
  },
  {
    title: 'NOM-017-STPS-2008',
    summary: 'Equipo de protección personal-Selección, uso y manejo en los centros de trabajo.',
    details: 'Determinar el equipo de protección personal que requieren los trabajadores para protegerse de los agentes del medio ambiente del centro laboral que dañan su salud e integridad física.',
    icon: `${base}img/servicios/nom-017-stps-2008.png`
  },
  {
    title: 'NOM-020-STPS-2011',
    summary: 'Recipientes sujetos a presión, recipientes criogénicos y generadores de vapor o calderas - Funcionamiento - Condiciones de Seguridad.',
    details: 'Integración de expediente, plano y Ensayos No Destructivos a recipientes sujetos a presión.',
    icon: `${base}img/servicios/nom-020-stps-2011.png`
  },
  {
    title: 'NOM-022-STPS-2015',
    summary: 'Electricidad estática en los centros de trabajo-Condiciones de seguridad e higiene.',
    details: 'Evaluar la continuidad del sistema de puesta a tierra de los equipos que acumulen cargas electrostáticas y la resistencia del terreno.',
    icon: `${base}img/servicios/nom-022-stps-2015.png`
  },
  {
    title: 'NOM-025-STPS-2008',
    summary: 'Condiciones de iluminación en los centros de trabajo.',
    details: 'Evaluar la iluminación en las áreas de trabajo y determinar si es la adecuada dependiendo la actividad visual que se realiza, a fin de proponer recomendaciones para promover un ambiente de trabajo adecuado para el personal.',
    icon: `${base}img/servicios/nom-025-stps-2008.png`
  },
  {
    title: 'NOM-029-STPS-2011',
    summary: 'Mantenimiento de las instalaciones eléctricas en los centros de trabajo-Condiciones de seguridad.',
    details: 'Elaborar un estudio de riesgo potencial de actividades de mantenimiento en las instalaciones eléctricas del centro de trabajo a fin de identificar los riesgos a los que están expuestos el personal responsable de realizar estas actividades y personal ajeno.',
    icon: `${base}img/servicios/nom-029-stps-2011.png`
  },
  {
    title: 'NOM-030-STPS-2009',
    summary: 'Servicios preventivos de seguridad y salud en el trabajo, funciones y actividades.',
    details: 'Establecer las funciones y actividades que deberán realizar los servicios preventivos de seguridad y salud en el trabajo para prevenir accidentes y enfermedades de trabajo.',
    icon: `${base}img/servicios/nom-030-stps-2009.png`
  },
  {
    title: 'NOM-035-STPS-2018',
    summary: 'Factores de riesgo psicosocial en el trabajo-Identificación, análisis y prevención.',
    details: 'Identificar los riesgos psicosociales a los que se encuentran expuestos los trabajadores.',
    icon: `${base}img/servicios/nom-035-stps-2018.png`
  },
  {
    title: 'NOM-036-1-STPS-2018',
    summary: 'Factores de riesgo ergonómico en el Trabajo-Identificación, análisis, prevención y control. Parte 1: Manejo manual de cargas.',
    details: 'Identificar los riesgos por manipulación de cargas en forma manual en aquellos puestos que así lo requieran.',
    icon: `${base}img/servicios/nom-036-1-stps-2018.png`
  },
  {
    title: 'PROGRAMA INTERNO DE PROTECCIÓN CIVIL',
    summary: '',
    details: 'Se realizará y/o elaborará el Programa Específico de Protección Civil, de conformidad con lo dispuesto por los artículos 6.16 del Código Administrativo del Estado de México y 44 del Reglamento de la Ley de Protección Civil vigente, así como a la Norma Técnica de Protección Civil NTE-001-CGPC-2016 Que establece los lineamientos y las especificaciones para la elaboración de programas internos o específicos de protección civil, que deberán desarrollar las dependencias, organismos y entidades de los sectores público, social y privado, encaminados a proteger a las personas que estén en sus instalaciones, así como sus bienes, a través de acciones de prevención, auxilio y recuperación, en caso de riesgo o desastre.',
    icon: `${base}img/servicios/programa-interno.png`
  }
]
</script>

<template>

  <h3 class="text-2xl md:text-3xl font-bold text-white mt-4">Da click en las tarjetas para más información.</h3>
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

