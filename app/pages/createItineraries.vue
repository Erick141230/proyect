<template>
  <div class="min-h-screen bg-gray-50 flex justify-center py-10">
    
    <div class="w-full max-w-3xl bg-white shadow rounded-lg p-8">
      <h1 class="text-2xl font-semibold text-gray-800 mb-8">Crear Itinerario</h1>

      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- Nombre itinerario -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Nombre del Itinerario
          </label>
          <input
            v-model="form.nombre"
            type="text"
            placeholder="Ej: Fin de semana en La Candelaria"
            class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <!-- Duración -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Duración del recorrido (horas)
          </label>
          <input
            v-model="form.duracion"
            type="number"
            placeholder="Ej: 8"
            class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <!-- Intereses -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Intereses</label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="interes in intereses"
              :key="interes"
              type="button"
              :class="[
                'px-4 py-2 rounded-md border transition',
                form.intereses.includes(interes)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              ]"
              @click="toggleInteres(interes)"
            >
              {{ interes }}
            </button>
          </div>
        </div>

        <!-- Presupuesto -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Presupuesto estimado
          </label>
          <div class="flex items-center space-x-3">
            <input
              v-model="form.presupuesto"
              type="number"
              placeholder="Ingresa el monto"
              class="flex-grow px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <div class="flex items-center space-x-2">
              <label v-for="moneda in monedas" :key="moneda" class="flex items-center">
                <input
                  type="radio"
                  v-model="form.moneda"
                  :value="moneda"
                  class="mr-1"
                />
                {{ moneda }}
              </label>
            </div>
          </div>
        </div>

        <!-- Medios de transporte -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Medio de transporte preferido
          </label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="trans in transportes"
              :key="trans"
              type="button"
              :class="[
                'px-4 py-2 rounded-md border transition',
                form.transportes.includes(trans)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              ]"
              @click="toggleTransporte(trans)"
            >
              {{ trans }}
            </button>
          </div>
          <input
            v-model="form.otroTransporte"
            type="text"
            placeholder="Otro medio de transporte..."
            class="mt-3 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <!-- Comentarios -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Comentarios adicionales (opcional)
          </label>
          <textarea
            v-model="form.comentarios"
            rows="4"
            placeholder="Añade información adicional o preferencias específicas..."
            class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <!-- Botón -->
        <div class="text-right">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition disabled:opacity-50"
            :disabled="loading"
          >
            {{ loading ? "Creando..." : "Crear Itinerario" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
    import { ref } from "vue"

    const intereses = ["Arte y Museos", "Gastronomía", "Historia", "Naturaleza", "Compras", "Vida Nocturna"]
    const transportes = ["A pie", "Transporte público", "Taxi/Uber", "Vehículo propio"]
    const monedas = ["COP", "USD", "EUR"]

    const form = ref({
    nombre: "",
    duracion: "",
    intereses: [],
    presupuesto: "",
    moneda: "COP",
    transportes: [],
    otroTransporte: "",
    comentarios: ""
    })

    const loading = ref(false)

    const toggleInteres = (i) => {
    if (form.value.intereses.includes(i)) {
        form.value.intereses = form.value.intereses.filter((item) => item !== i)
    } else {
        form.value.intereses.push(i)
    }
    }

    const toggleTransporte = (t) => {
    if (form.value.transportes.includes(t)) {
        form.value.transportes = form.value.transportes.filter((item) => item !== t)
    } else {
        form.value.transportes.push(t)
    }
    }

    const submitForm = async () => {
    loading.value = true
    console.log("Formulario enviado:", form.value)


    setTimeout(() => {
        loading.value = false
        alert("Formulario capturado con éxito 🚀")
    }, 1200)
    }
</script>
