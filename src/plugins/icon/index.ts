import SvgIcon from "@/components/SvgIcon/index.vue";
import "virtual:svg-icons-register";
import type { App } from "vue";

export function setup(app: App<Element>) {
  app.component("SvgIcon", SvgIcon);
}
