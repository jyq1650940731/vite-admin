import type { App } from "vue";
import { setup as setupRouter } from "@/router";
import { setup as setupElementPlus } from "./element-plus";
import { setup as setupSvgIcon } from "./icon";
import { setup as setupPinia } from "@/stores";
import { setup as setupMonitor } from "./monitor";
export function setup(app: App<Element>) {
  setupPinia(app);
  setupElementPlus(app);
  setupSvgIcon(app);
  setupMonitor();
  return setupRouter(app);
}
