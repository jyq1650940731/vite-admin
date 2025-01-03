import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setup as setupPlugins } from "./plugins";
import "element-plus/dist/index.css";

const app = createApp(App);
setupPlugins(app);
app.mount("#app");
