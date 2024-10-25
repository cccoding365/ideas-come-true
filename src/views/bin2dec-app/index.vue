<template>
  <div class="container mx-auto w-full h-screen flex justify-center items-center p-5">
    <div class="relative flex flex-col rounded-xl bg-transparent">
      <h4 class="block text-xl font-medium text-slate-800">Bin2Dec</h4>
      <p class="text-slate-500 font-light">
        You enter a binary number and I convert it to decimal.
      </p>
      <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div class="mb-1 flex flex-col gap-6">
          <div class="w-full max-w-sm min-w-[200px]">
            <label class="block mb-2 text-sm text-slate-600"> Binary Input </label>
            <input
              type="text"
              class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter 0 or 1"
              v-model="binary"
              @input="onBinaryInput"
            />
          </div>
          <div class="w-full max-w-sm min-w-[200px]">
            <label class="block mb-2 text-sm text-slate-600"> Decimal Output </label>
            <input
              type="email"
              disabled
              class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Click 'OK' to convert"
              v-model="decimal"
            />
          </div>
        </div>

        <button
          class="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          @click="onConvert"
        >
          OK
        </button>
        <button
          class="mt-4 w-full rounded-md bg-slate-400 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-600 focus:shadow-none active:bg-slate-600 hover:bg-slate-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          @click="onBack"
        >
          Back
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";

const binary = ref("");
const onBinaryInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  target.value = value.replace(/[^01]/g, "");
};

const decimal = ref<number>(null);
const onConvert = () => {
  const arr = Array.from(binary.value).reverse().map(Number);
  decimal.value = arr.reduce((prev, curr, idx) => {
    prev += curr * 2 ** idx;
    return prev;
  }, 0);
};

const onBack = () => {
  router.replace({ path: "/" });
};
</script>
