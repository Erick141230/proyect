<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
    <div class="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">

      
      <div class="bg-gradient-to-r from-blue-500 to-teal-400 p-6 text-center">
        <h1 class="text-2xl font-bold text-white">TourSoft</h1>
        <p class="text-white text-sm">Tu asistente turístico para Bogotá</p>
      </div>
      
      
      <div class="p-6">
        <h2 class="text-xl font-semibold text-center mb-6">Crear Cuenta</h2>

        
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Correo Electrónico</label>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 
                         12 15.75a7.488 7.488 0 0 0-5.982 
                         2.975m11.963 0a9 9 0 1 0-11.963 
                         0m11.963 0A8.966 8.966 0 0 1 12 
                         21a8.966 8.966 0 0 1-5.982-2.275M15 
                         9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
            </span>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              class="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
              v-model="email"
            />
          </div>
        </div>

        
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Contraseña</label>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 
                         0-9 0v3.75m-.75 11.25h10.5a2.25 
                         2.25 0 0 0 2.25-2.25v-6.75a2.25 
                         2.25 0 0 0-2.25-2.25H6.75a2.25 
                         2.25 0 0 0-2.25 2.25v6.75a2.25 
                         2.25 0 0 0 2.25 2.25Z"/>
              </svg>
            </span>
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="pl-10 pr-10 w-full border border-gray-300 rounded-md py-2 px-3
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
              v-model="password"
            />
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 cursor-pointer"
              @click="showPassword = !showPassword"
            >
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </span>
          </div>
        </div>

        
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Confirmar Contraseña</label>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 
                         0-9 0v3.75m-.75 11.25h10.5a2.25 
                         2.25 0 0 0 2.25-2.25v-6.75a2.25 
                         2.25 0 0 0-2.25-2.25H6.75a2.25 
                         2.25 0 0 0-2.25 2.25v6.75a2.25 
                         2.25 0 0 0 2.25 2.25Z"/>
              </svg>
            </span>
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="pl-10 pr-10 w-full border border-gray-300 rounded-md py-2 px-3
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
              v-model="confirmPassword"
            />
          </div>
        </div>

        
        <button
          @click="register"
          class="w-full bg-gradient-to-r from-blue-500 to-teal-400 
                 text-white py-2 px-4 rounded-md hover:opacity-90 transition"
        >
          Registrarse
        </button>

        
        <p class="text-center text-gray-600 text-sm mt-4">
          ¿Ya tienes una cuenta?
          <a href="/" class="text-blue-600 hover:underline">Inicia Sesión</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
    definePageMeta({
    layout: false
    })
    import { ref } from 'vue'

    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const showPassword = ref(false)

    const register = async () => {
    if (password.value !== confirmPassword.value) {
        alert("Las contraseñas no coinciden")
        return
    }

    const res = await $fetch('/api/register', {
        method: 'POST',
        body: {
        email: email.value,
        password: password.value,
        }
    })
    console.log("Registro:", res)
    }
</script>