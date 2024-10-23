import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/bin2dec-app",
    component: () => import("@/views/bin2dec-app/index.vue"),
  },
  {
    path: "/:w+",
    component: () => import("@/views/404/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
