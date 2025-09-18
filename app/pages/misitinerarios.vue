<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Mis Itinerarios</h1>
        <button
          class="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          <span>Crear Nuevo Itinerario</span>
        </button>
      </div>

      <!-- Búsqueda y Filtros -->
      <div class="mb-8">
        <div class="flex justify-between items-center">
          <!-- Barra de búsqueda -->
          <div class="relative max-w-md">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar itinerarios..."
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
            <svg class="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <!-- Filtros -->
          <div class="flex items-center space-x-4">
            <span class="text-gray-600">Filtrar:</span>
            <div class="flex space-x-2">
              <button v-for="filter in filters" :key="filter.value"
                @click="activeFilter = filter.value"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeFilter === filter.value
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                ]"
              >
                {{ filter.label }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid de Itinerarios -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="itinerary in filteredItineraries"
          :key="itinerary.id"
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        >
          <!-- Imagen con overlay -->
          <div class="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900">
            <img
              v-if="itinerary.image"
              :src="itinerary.image"
              :alt="itinerary.title"
              class="w-full h-full object-cover opacity-70"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <!-- Título y fecha -->
            <div class="absolute bottom-4 left-4 right-4">
              <h3 class="text-white font-semibold text-lg mb-1">{{ itinerary.title }}</h3>
              <p class="text-gray-200 text-sm">
                <svg class="inline-block w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {{ itinerary.date }}
              </p>
            </div>
          </div>

          <!-- Detalles -->
          <div class="p-4">
            <p class="text-sm text-gray-700 mb-3">{{ itinerary.description }}</p>
            <div class="flex items-center mb-3">
              <p class="text-gray-500 text-sm mr-6">{{ itinerary.duration }} días</p>
              <p class="text-gray-500 text-sm">{{ itinerary.places }} lugares</p>
            </div>

            <!-- Etiquetas -->
            <div class="flex space-x-2">
              <span v-for="tag in itinerary.tags" :key="tag" class="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      activeFilter: 'todos',
      filters: [
        { label: 'Todos', value: 'todos' },
        { label: 'Planificados', value: 'planificados' },
        { label: 'En Progreso', value: 'en-progreso' },
        { label: 'Completados', value: 'completados' },
      ],
      itineraries: [
        {
          id: 1,
          title: 'Recorrido Cultural por Bogotá',
          date: '14-15 jul 2023',
          description: 'Un viaje por los principales atractivos culturales y históricos de Bogotá.',
          duration: 2,
          places: 9,
          tags: ['Arte y Museos', 'Gastronomía', 'Historia'],
          status: 'completado',
          image: 'ruta-a-la-imagen',
        },
        {
          id: 2,
          title: 'Fin de semana en La Candelaria',
          date: '4-5 ago 2023',
          description: 'Explora el corazón histórico de Bogotá.',
          duration: 2,
          places: 6,
          tags: ['Historia', 'Gastronomía'],
          status: 'en-progreso',
          image: 'ruta-a-la-imagen',
        },
        {
          id: 3,
          title: 'Museos de Bogotá',
          date: '9 sept 2023',
          description: 'Un recorrido por los mejores museos de la ciudad.',
          duration: 1,
          places: 4,
          tags: ['Arte y Museos', 'Historia'],
          status: 'planificado',
          image: 'ruta-a-la-imagen',
        },
      ],
    };
  },
  computed: {
    filteredItineraries() {
      return this.itineraries.filter(itinerary => {
        return (
          (this.activeFilter === 'todos' || itinerary.status === this.activeFilter) &&
          itinerary.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    goToItinerary(id) {
      this.$router.push(`/itinerary/${id}`);
    },
  },
};
</script>