import { createApp } from "vue";
import App from "./App.vue";
import { setup as setupPlugins } from "./plugins";
import "@/styles/index.scss";
import "virtual:uno.css";

const app = createApp(App);
setupPlugins(app);
app.mount("#app");
