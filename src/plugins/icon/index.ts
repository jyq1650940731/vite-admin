import SvgIcon from "@/components/SvgIcon/index.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "virtual:svg-icons-register";
import type { App } from "vue";

export function setup(app: App<Element>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  app.component("SvgIcon", SvgIcon);
}
