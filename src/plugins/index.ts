import type { App } from "vue";
import { setup as setupRouter } from "@/router";
import { setup as setupElementPlus } from "./element-plus";
import { setup as setupSvgIcon } from "./icon";
export function setup(app: App<Element>) {
  setupRouter(app);
  setupElementPlus(app);
  setupSvgIcon(app);
}
