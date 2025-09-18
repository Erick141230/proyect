<script setup>
const { data: transports, error } = await useFetch("/api/transport")
</script>

<template>
  <div>
    <h1>Transports</h1>
    <ul>
      <li v-for="t in transports" :key="t.id_transport">
        {{ t.name }}
      </li>
    </ul>
    <p v-if="error">Error: {{ error }}</p>
  </div>
</template>
