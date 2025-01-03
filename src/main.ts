import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@/styles/index.scss";
import { setup as setupPlugins } from "./plugins";

const app = createApp(App);
setupPlugins(app);
app.mount("#app");
