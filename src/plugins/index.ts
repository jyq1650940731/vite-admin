import type { App } from "vue";
import { setup as setupElementPlus } from "./element-plus";
import { setup as setupSvgIcon } from "./icon";
export function setup(app: App<Element>) {
  setupElementPlus(app);
  setupSvgIcon(app);
}
