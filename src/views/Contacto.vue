<template>
  <section class="p-8 max-w-6xl mx-auto text-gray-700">
    <h2 class="text-2xl font-semibold text-coshend-blue mb-8 text-center">Contáctanos</h2>

    <div class="grid md:grid-cols-12 gap-6 items-center">
      <!-- Izquierda: imagen + texto -->
      <div class="md:col-span-6 space-y-4">
        <div>
          <img src="/img/contacto.jpg" alt="Equipo Coshend"
            class="w-full h-64 object-cover rounded shadow" />
        </div>
        <div>
          <h3 class="text-lg font-bold text-coshend-brown mb-2">Estamos para apoyarte</h3>
          <p class="text-gray-600 leading-relaxed">
            Escríbenos si necesitas una consultoría especializada en seguridad, inclusión y cultura organizacional.  
            Nuestro equipo se pondrá en contacto lo antes posible.
          </p>
        </div>
      </div>

      <!-- Derecha: íconos sociales -->
      <div class="md:col-span-6 flex flex-col items-center justify-center gap-6">
        <p class="text-coshend-orange font-semibold">Síguenos o escríbenos en:</p>
        <div class="flex gap-8 text-coshend-blue text-3xl">
          <a href="https://wa.me/5215555555555" target="_blank" aria-label="WhatsApp" title="WhatsApp">
            <i class="fab fa-whatsapp hover:text-green-600 transition"></i>
          </a>
          <a href="https://www.facebook.com/tuconsultora" target="_blank" aria-label="Facebook" title="Facebook">
            <i class="fab fa-facebook hover:text-blue-700 transition"></i>
          </a>
          <a href="https://www.linkedin.com/company/tuconsultora" target="_blank" aria-label="LinkedIn" title="LinkedIn">
            <i class="fab fa-linkedin hover:text-blue-800 transition"></i>
          </a>
          <a href="mailto:contacto@coshend.com" aria-label="Correo" title="Correo electrónico">
            <i class="fas fa-envelope hover:text-coshend-orange transition"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
