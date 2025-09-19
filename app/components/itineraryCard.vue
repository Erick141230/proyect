<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <img
      :src="itinerary.image"
      :alt="itinerary.title"
      class="w-full h-48 object-cover"
    />
    <div class="p-4 flex-grow">
      <h3 class="font-semibold text-lg mb-2 text-gray-800">
        {{ itinerary.title }}
      </h3>
      <div class="text-gray-500 text-sm mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-4 h-4 mr-1 text-gray-400"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.25 7.25a.75.75 0 0 1 1.5 0v3.25l1.72.114a.75.75 0 0 1 .012 1.498l-2.25.15A.75.75 0 0 1 8 11.25V7.25Z"
            clip-rule="evenodd"
          />
        </svg>
        <span>{{ itinerary.date }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-4 h-4 ml-3 mr-1 text-gray-400"
        >
          <path
            fill-rule="evenodd"
            d="M5.5 2A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9A1.5 1.5 0 0 0 16 16.5v-3.468a.75.75 0 0 0 .5-1.332l-3-3a.75.75 0 0 0-1 0l-3 3a.75.75 0 0 0 .5 1.332V16.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5ZM13.5 11.72a.75.75 0 0 0-1 0L9.72 14.5a.75.75 0 0 0 1 1l2.5-2.5a.75.75 0 0 0 0-1Z"
            clip-rule="evenodd"
          />
        </svg>
        <span>{{ itinerary.placesCount }} lugares</span>
      </div>
    </div>
    <div
      class="p-4 bg-gray-50 border-t border-gray-100 flex justify-end space-x-2"
    >
      <button
        class="text-gray-600 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors text-sm"
      >
        Ver detalles
      </button>
      <button
        class="bg-toursoft-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm"
      >
        Editar
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itinerary: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Título del Itinerario',
      date: '1/1/2024',
      placesCount: 0,
      image: 'https://via.placeholder.com/300x200',
    }),
  },
});
</script>
