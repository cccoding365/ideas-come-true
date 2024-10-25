import { createApp } from "vue";
import router from "@/router";
import "@/styles/main.css";
import App from "@/App.vue";

const app = createApp(App);

app.use(router).mount("#app");
