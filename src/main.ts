import App from "./App.vue";
import { createApp } from "vue";
import { setup as setupPlugins } from "./plugins";
import "@/styles/index.scss";
// import "virtual:uno.css";
import "./mock/index";

const app = createApp(App);
setupPlugins(app)
  .isReady()
  .then(() => {
    app.mount("#app");
  });
