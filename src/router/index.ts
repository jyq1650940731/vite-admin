import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [{ path: "/", component: () => import("./") }];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export function setup(app: App<Element>) {
  app.use(router);
}
