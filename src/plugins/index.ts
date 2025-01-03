import type { App } from "vue";
import { setup as setupElementPlus } from "./element-plus";

export function setup(app: App<Element>) {
  setupElementPlus(app);
}
