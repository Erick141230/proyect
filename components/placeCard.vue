<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <img
      :src="place.image"
      :alt="place.title"
      class="w-full h-48 object-cover"
    />
    <div class="p-4 flex-grow">
      <h3 class="font-semibold text-lg mb-1 text-gray-800">
        {{ place.title }}
      </h3>
      <p class="text-gray-600 text-sm mb-2">{{ place.description }}</p>
      <div class="flex items-center text-sm text-gray-700">
        <span
          v-for="n in 5"
          :key="n"
          :class="{
            'text-yellow-400': n <= place.rating,
            'text-gray-300': n > place.rating,
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-4 h-4 inline-block"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c.321-.772 1.415-.772 1.736 0l1.888 4.568a1.85 1.85 0 0 0 1.662 1.258l4.887.394c.839.068 1.173 1.116.592 1.636l-3.567 3.257a1.85 1.85 0 0 0-.583 1.778l1.065 4.776c.175.78-.654 1.39-1.397.92L10 18.23l-4.124 2.527c-.743.47-1.572-.14-1.397-.92l1.065-4.776a1.85 1.85 0 0 0-.583-1.778L.685 10.74c-.58-.52-.246-1.568.592-1.636l4.887-.394a1.85 1.85 0 0 0 1.662-1.258l1.888-4.568Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span class="ml-2">({{ place.rating.toFixed(1) }})</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  place: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Título del Lugar',
      description: 'Descripción breve del lugar.',
      rating: 0,
      image: 'https://via.placeholder.com/300x200',
    }),
  },
});
</script>
