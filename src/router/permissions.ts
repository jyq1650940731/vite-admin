import VabProgress from "nprogress";
import "nprogress/nprogress.css";

import { useRouterStore } from "@/stores/modules/routes";

import type { Router } from "vue-router";

export function setupPermissions(router: Router) {
  VabProgress.configure({
    easing: "ease",
    speed: 500,
    trickleSpeed: 200,
    showSpinner: false,
  });
  router.beforeEach(async (to, from, next) => {
    VabProgress.start();
    const { routes, setRoutes } = useRouterStore();
    if (routes.length) {
      // 禁止已登录用户返回登录页
      if (to.path === "/login") {
        next({ path: "/" });
      } else next();
    } else {
      await setRoutes();
      next({ ...to, replace: true });
    }
  });
  router.afterEach(() => {
    VabProgress.done();
  });
}
