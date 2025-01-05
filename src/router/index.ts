import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/index.vue";
const routes = [
  {
    path: "/",
    name: "Root",
    component: Layout,
    meta: {
      title: "首页",
      icon: "home-2-line",
      breadcrumbHidden: true,
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export function setup(app: App<Element>) {
  app.use(router);
}
