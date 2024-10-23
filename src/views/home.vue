<template>
  <page-header></page-header>
  <grid-container>
    <app-item
      v-for="(item, index) in apps"
      :key="index"
      :data="item"
      @click="onApp(item)"
    ></app-item>
  </grid-container>
  <page-footer></page-footer>
</template>

<script setup lang="ts">
import router from "../router";
import { IApp } from "../types";
import apps from "../configs/apps";
import gridContainer from "../components/grid-container.vue";
import appItem from "../components/app-item.vue";
import pageHeader from "../components/page-header.vue";
import pageFooter from "../components/page-footer.vue";

const onApp = (app: IApp) => {
  router.push(app.url);
};
</script>
