<template>
  <nav
    class="block w-full px-4 py-2 mx-auto bg-white bg-opacity-90 sticky top-0 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
      <a href="#" class="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
        Ideas Come True
      </a>
      <div class="hidden lg:block">
        <ul
          class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
        >
          <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <a href="#" class="flex items-center">About</a>
          </li>
          <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <a href="#" class="flex items-center">Docs</a>
          </li>
          <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <a href="#" class="flex items-center">Contract</a>
          </li>
        </ul>
      </div>
      <button
        class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
        type="button"
      >
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </span>
      </button>
    </div>
  </nav>
  <main class="container mx-auto">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 py-5"
    >
      <div
        class="relative flex flex-col bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer"
        v-for="(item, index) in apps"
        :key="index"
        @click="onApp(item)"
      >
        <div class="p-4">
          <h5 class="mb-2 text-slate-800 text-xl font-semibold line-clamp-1">{{ item.name }}</h5>
          <p class="text-slate-600 leading-normal font-light line-clamp-2">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </main>
  <footer class="container mx-auto w-full bg-white p-8">
  <div class="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
      <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
      <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
      <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
    </svg>
 
    <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          License
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          Contribute
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
  <p class="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
    Copyright © 2024&nbsp; 
    <a href="https://material-tailwind.com/" target="_blank" rel="noreferrer">Ideas Come True</a>.
  </p>
  </footer>
</template>

<script setup lang="ts">
import router from "@/router";
import { IApp } from "@/types";
import apps from "@/configs/apps";

const onApp = (app: IApp) => {
  router.push(app.url);
};
</script>
