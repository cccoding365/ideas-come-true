<template>
  <div
    class="relative container mx-auto w-full flex flex-col justify-center items-center my-28 bg-white shadow-sm border border-slate-200 rounded-lg p-2"
  >
    <div class="p-3 text-center">
      <div class="flex justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="text-slate-400 w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      </div>
      <div class="flex justify-center mb-2">
        <h5 class="text-slate-800 text-2xl font-semibold">404 Not found!</h5>
      </div>
      <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
        No APIs created yet. Contact us for more details.
      </p>
    </div>
    <button
      class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      type="button"
      @click="onBackHome"
    >
      Come Back Home
    </button>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";

const onBackHome = () => {
  router.replace({ path: "/" });
};
</script>
