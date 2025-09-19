<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Título -->
    <div class="max-w-6xl mx-auto py-10">
      <h1 class="text-2xl font-semibold text-gray-800 mb-8">Mi Perfil</h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Columna izquierda: Info usuario -->
            <div class="space-y-6">
                <div class="bg-white shadow rounded-lg p-6">
                    <div class="flex flex-col items-center text-center">
                        <!-- Avatar -->
                        <div class="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mb-4">
                        <i class="fas fa-user text-4xl"></i>
                        </div>
                        <!-- Info -->
                        <h2 class="text-lg font-medium">{{ user.name }}</h2>
                        <p class="text-sm text-gray-500">{{ user.email }}</p>
                        <p class="text-xs text-gray-400">Miembro desde {{ user.createdAt }}</p>

                        <button class="text-sm text-blue-600 hover:underline mt-2">
                        Cambiar foto de perfil
                        </button>
                    </div>

                    <div class="border-t border-gray-200 mt-6 pt-4 text-sm text-gray-600">
                        <div class="flex items-center mb-2">
                        <i class="fas fa-user text-gray-400 mr-2"></i>
                        {{ user.name }}
                        </div>
                        <div class="flex items-center mb-2">
                        <i class="fas fa-envelope text-gray-400 mr-2"></i>
                        {{ user.email }}
                        </div>
                    </div>
                </div>
                
                <!-- Zona de Peligro -->
                <div class="bg-white shadow rounded-lg p-6 border border-red-300">
                    <h2 class="text-lg font-medium text-red-600 mb-2">Zona de Peligro</h2>
                    <p class="text-sm text-gray-600 mb-4">
                    Eliminar tu cuenta es una acción permanente y no se puede deshacer. Todos tus datos serán eliminados.
                    </p>
                    <button
                    @click="deleteAccount"
                    class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                    >
                    Eliminar mi cuenta
                    </button>
                </div>
                
            </div>


            <!-- Columna derecha: formularios -->
            <div class="md:col-span-2 space-y-6">

                <!-- Información Personal -->
                <div class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-lg font-medium mb-4">Información Personal</h2>
                    <form @submit.prevent="updateProfile" class="space-y-4">
                    <div>
                        <label class="block text-sm text-gray-700 mb-1">Nombre Completo</label>
                        <input
                        v-model="form.name"
                        type="text"
                        class="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>
                    <div>
                        <label class="block text-sm text-gray-700 mb-1">Correo Electrónico</label>
                        <input
                        v-model="form.email"
                        type="email"
                        class="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                        <p class="text-xs text-gray-400 mt-1">
                        La información de contacto solo puede ser modificada por un administrador
                        </p>
                    </div>
                    <button
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                        Guardar Cambios
                    </button>
                    </form>
                </div>

                <!-- Cambiar Contraseña -->
                <div class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-lg font-medium mb-4">Cambiar Contraseña</h2>
                    <form @submit.prevent="updatePassword" class="space-y-4">
                    <div>
                        <label class="block text-sm text-gray-700 mb-1">Contraseña Actual</label>
                        <input
                        v-model="passwords.current"
                        type="password"
                        class="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>
                    <div>
                        <label class="block text-sm text-gray-700 mb-1">Nueva Contraseña</label>
                        <input
                        v-model="passwords.new"
                        type="password"
                        class="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>
                    <div>
                        <label class="block text-sm text-gray-700 mb-1">Confirmar Nueva Contraseña</label>
                        <input
                        v-model="passwords.confirm"
                        type="password"
                        class="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                        Actualizar Contraseña
                    </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from "vue"

    const user = ref({
    name: "Usuario Demo",
    email: "demo@toursoft.com",
    createdAt: "15/03/2023"
    })

    const form = ref({
    name: user.value.name,
    email: user.value.email
    })

    const passwords = ref({
    current: "",
    new: "",
    confirm: ""
    })

    const updateProfile = async () => {
    console.log("Enviando datos de perfil:", form.value)
    // Aquí harías un $fetch('/api/update-profile') hacia tu backend/Nitro conectado a la BD
    }

    const updatePassword = async () => {
    if (passwords.value.new !== passwords.value.confirm) {
        return alert("Las contraseñas no coinciden")
    }
    console.log("Enviando datos de contraseña:", passwords.value)
    // Aquí harías un $fetch('/api/update-password')
    }

    const deleteAccount = async () => {
    if (confirm("¿Seguro que deseas eliminar tu cuenta?")) {
        console.log("Eliminar usuario")
        // Aquí harías un $fetch('/api/delete-account')
    }
    }
</script>