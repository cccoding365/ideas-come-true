<template>
  <div
    class="bg-blue-300 p-5 rounded shadow-md hover:-translate-y-1 shadow-black cursor-pointer transition-transform"
  >
    <div class="font-bold text-xl line-clamp-1">
      {{ data.name }}
    </div>
    <div class="text-gray-500 text-sm line-clamp-2">
      {{ data.desc }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { IApp } from "../configs/apps";
defineProps<{
  data?: IApp;
}>();
</script>

<style scoped></style>
