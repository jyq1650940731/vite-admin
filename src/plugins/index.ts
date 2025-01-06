import type { App } from "vue";
import { setup as setupRouter } from "@/router";
import { setup as setupElementPlus } from "./element-plus";
import { setup as setupSvgIcon } from "./icon";
import { setup as setupPinia } from "@/stores";
export function setup(app: App<Element>) {
  setupPinia(app);
  setupElementPlus(app);
  setupSvgIcon(app);
  return setupRouter(app);
}
