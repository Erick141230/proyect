<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header de bienvenida -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">
          Bienvenido, Usuario
        </h1>
        <p class="text-gray-600 text-lg">
          ¿Qué te gustaría hacer hoy en Bogotá?
        </p>
      </div>

      <!-- Cards principales -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <!-- Crear Itinerario -->
        <div
          class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div class="flex items-start space-x-4">
            <div class="bg-blue-100 p-3 rounded-xl">
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 text-lg mb-1">
                Crear Itinerario
              </h3>
              <p class="text-gray-600 text-sm">
                Planifica tu visita personalizada
              </p>
            </div>
          </div>
        </div>

        <!-- Mis Itinerarios -->
        <div
          class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div class="flex items-start space-x-4">
            <div class="bg-green-100 p-3 rounded-xl">
              <svg
                class="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 text-lg mb-1">
                Mis Itinerarios
              </h3>
              <p class="text-gray-600 text-sm">Consulta tus planes guardados</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Secciones principales -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Itinerarios Recientes -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-800">
              Itinerarios Recientes
            </h2>
            <button
              class="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Ver todos
            </button>
          </div>

          <div class="space-y-4">
            <!-- Itinerario 1 -->
            <div
              class="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div>
                <h3 class="font-medium text-gray-800 mb-1">
                  Fin de semana en La Candelaria
                </h3>
                <p class="text-gray-500 text-sm">15-16 Jul • 6 lugares</p>
              </div>
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>

            <!-- Itinerario 2 -->
            <div
              class="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div>
                <h3 class="font-medium text-gray-800 mb-1">Museos de Bogotá</h3>
                <p class="text-gray-500 text-sm">10 Jul • 4 lugares</p>
              </div>
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Lugares Populares -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-800">
              Lugares Populares
            </h2>
            <button
              class="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Ver todos
            </button>
          </div>

          <div class="space-y-4">
            <!-- Lugar 1 -->
            <div
              class="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div>
                <h3 class="font-medium text-gray-800 mb-1">Monserrate</h3>
                <p class="text-gray-500 text-sm">Naturaleza</p>
              </div>
              <div class="flex items-center space-x-1">
                <svg
                  class="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <span class="text-gray-700 font-medium">4.8</span>
              </div>
            </div>

            <!-- Lugar 2 -->
            <div
              class="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div>
                <h3 class="font-medium text-gray-800 mb-1">Museo del Oro</h3>
                <p class="text-gray-500 text-sm">Cultura</p>
              </div>
              <div class="flex items-center space-x-1">
                <svg
                  class="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <span class="text-gray-700 font-medium">4.7</span>
              </div>
            </div>

            <!-- Lugar 3 -->
            <div
              class="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div>
                <h3 class="font-medium text-gray-800 mb-1">Plaza de Bolívar</h3>
                <p class="text-gray-500 text-sm">Historia</p>
              </div>
              <div class="flex items-center space-x-1">
                <svg
                  class="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <span class="text-gray-700 font-medium">4.5</span>
              </div>
            </div>
          </div>

          <!-- Nota al final -->
          <div class="mt-6 pt-4 border-t border-gray-100">
            <div class="flex items-center space-x-2 text-gray-500 text-sm">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
              <span>Basado en calificaciones de usuarios</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Puedes agregar lógica aquí si es necesario
definePageMeta({
  title: 'Dashboard - TourSoft',
});
</script>