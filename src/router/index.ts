import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/index.vue";
import { setupPermissions } from "./permissions";
import type { VelRouteRecord } from "@/types/dataTypes/router";
import type { RouteRecordRaw } from "vue-router";

export const constantRoutes: VelRouteRecord[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/403.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
    meta: {
      hidden: true,
    },
  },
];
export const asyncRoutes: VelRouteRecord[] = [
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
  routes: constantRoutes as RouteRecordRaw[],
});

function fatteningRoutes(routes: VelRouteRecord[]): VelRouteRecord[] {
  return routes.flatMap((route: VelRouteRecord) => {
    return route.children ? fatteningRoutes(route.children) : route;
  });
}

function addRouter(routes: VelRouteRecord[]) {
  routes.forEach((route: VelRouteRecord) => {
    if (!router.hasRoute(route.name)) router.addRoute(route as RouteRecordRaw);
    if (route.children) addRouter(route.children);
  });
}

export function resetRouter(routes: VelRouteRecord[]) {
  routes.map((route: VelRouteRecord) => {
    if (route.children) route.children = fatteningRoutes(route.children);
  });
  router.getRoutes().forEach(({ name }) => {
    if (router.hasRoute(<string>name)) router.removeRoute(<string>name);
  });
  addRouter(routes);
}

export function setup(app: App<Element>) {
  // addRouter(asyncRoutes);
  setupPermissions(router);
  app.use(router);
  return router;
}

export default router;
