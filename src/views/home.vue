<template>
  <header class="text-center text-3xl mt-5">Ideas Come True</header>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 p-10">
    <div
      v-for="(item, index) in apps"
      :key="index"
      class="bg-blue-300 p-5 rounded shadow-md hover:-translate-y-1 shadow-black cursor-pointer transition-transform"
      @click="onApp(item)"
    >
      <div class="font-bold text-xl line-clamp-1">
        {{ item.name }}
      </div>
      <div class="text-gray-500 text-sm line-clamp-2">
        {{ item.desc }}
      </div>
    </div>
  </div>
  <footer class="text-center">
    <div>
      Create By
      <a class="text-blue-400 font-bold" href="https://www.hecongcong.com/" target="_blank">
        DoubledConG
      </a>
      & Inspiration from
      <a
        class="text-blue-400 font-bold"
        href="https://github.com/florinpop17/app-ideas"
        target="_blank"
      >
        florinpop17/app-ideas
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import router from "../router";
import apps, { IApp } from "../configs/apps";

const onApp = (app: IApp) => {
  router.push(app.url);
};
</script>
