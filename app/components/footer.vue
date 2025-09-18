<template>
  <footer class="bg-gray-800 text-gray-300 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div class="space-y-4">
          <h3 class="text-white text-xl font-semibold">TourSoft</h3>
          <p class="text-gray-400 leading-relaxed">
            Tu asistente turístico para Bogotá. Planifica itinerarios
            personalizados y obtén asistencia en tiempo real.
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="text-white text-xl font-semibold">Contacto</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Bogotá, Colombia</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                ></path>
              </svg>
              <span>+57 123 456 7890</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                ></path>
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                ></path>
              </svg>
              <span>contacto@toursoft.com</span>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-white text-xl font-semibold">Enlaces</h3>
          <div class="space-y-3">
            <NuxtLink
              to="/terminos"
              class="block text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Términos y Condiciones
            </NuxtLink>
            <NuxtLink
              to="/privacidad"
              class="block text-gray-400 hover:text-gray-300 transition-colors duration-200"
            >
              Política de Privacidad
            </NuxtLink>
            <NuxtLink
              to="/soporte"
              class="block text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Ayuda y Soporte
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 pt-6">
        <p class="text-center text-gray-500 text-sm">
          © 2025 TourSoft. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
