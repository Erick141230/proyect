<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<template>
  <nav class="relative bg-white shadow-sm py-4">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <NuxtLink
        to="/"
        class="flex items-center text-xl font-bold text-gray-800 space-x-3"
      >
        <div
          class="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-1.5 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
            />
          </svg>
        </div>
        <span>TourSoft</span>
      </NuxtLink>
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-gray-700 focus:outline-none"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        :class="[
          'flex flex-col md:flex-row md:items-center md:justify-between md:space-x-4 md:static absolute md:relative top-full md:top-auto left-0 w-full bg-white md:bg-transparent z-20 transition-all duration-300',
          isOpen
            ? 'max-h-[500px] py-4 px-6'
            : 'max-h-0 md:max-h-full md:py-0 md:px-0 overflow-hidden',
        ]"
      >
        <div
          class="flex flex-col md:flex-row items-center justify-center w-full md:w-auto gap-2 md:gap-4 mx-auto"
        >
          <NuxtLink
            to="/"
            class="flex items-center space-x-1 px-3 py-1.5 rounded-md text-gray-700 bg-white hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>Inicio</span>
          </NuxtLink>

          <NuxtLink
            to="/"
            class="flex items-center space-x-1 px-3 py-1.5 rounded-md text-gray-700 bg-white hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
              />
            </svg>
            <span>Mis Itinerarios</span>
          </NuxtLink>

          <NuxtLink
            to="/"
            class="flex items-center space-x-1 px-3 py-1.5 rounded-md text-gray-700 bg-white hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>
            <span>Crear Itinerario</span>
          </NuxtLink>
        </div>
        <div
          class="flex flex-col md:flex-row items-center justify-center md:justify-end w-full md:w-auto gap-2 md:gap-4 mt-4 md:mt-0"
        >
          <NuxtLink
            to="/"
            class="flex items-center space-x-1 px-3 py-1.5 rounded-md text-gray-700 bg-white hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <span>Perfil</span>
          </NuxtLink>
          <button
            class="w-full md:w-auto border border-gray-300 text-gray-700 px-3 py-2 mt-2 md:mt-0 rounded-md hover:bg-gray-100 transition"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
