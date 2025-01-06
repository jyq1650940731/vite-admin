import qs from "qs";
import type { VelRoute, VelRouteRecord } from "@/types/dataTypes/router";
import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";
const modules = import.meta.glob("@/views/**/*.vue");
/**
 * @description all模式渲染后端返回路由,支持包含views路径的所有页面
 * @param asyncRoutes
 * @returns {*}
 */
export function convertRouter(asyncRoutes: VelRouteRecord[]) {
  return asyncRoutes.map((route: VelRouteRecord) => {
    if (route.component && route.component + "" === "Layout") {
      route.component = () => import("@/layouts/index.vue");
    } else {
      route.component = modules[`/src/${route.component}/index.vue`];
    }

    if (route.children && route.children.length) {
      route.children = convertRouter(route.children);
    } else delete route.children;
    return route;
  });
}

/**
 * @description 拦截路由
 * @param routes 路由
 */
export function filterRoutes(routes: VelRouteRecord[]) {
  return routes;
}

/**
 * 根据当前route获取激活菜单
 * @param route 当前路由
 * @param isTab 是否是标签
 * @returns {string|*}
 */
export function handleActivePath(route: VelRoute | RouteLocationNormalizedLoadedGeneric, isTab = false) {
  const { meta, path } = route;
  const rawPath = route.matched ? route.matched[route.matched.length - 1].path : path;
  const fullPath =
    route.query && Object.keys(route.query).length ? `${route.path}?${qs.stringify(route.query)}` : route.path;
  if (isTab) return meta.dynamicNewTab ? fullPath : rawPath;
  if (meta.activeMenu) return meta.activeMenu;
  return fullPath;
}
