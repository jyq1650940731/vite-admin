import qs from "qs";
import { resolve } from "path-browserify";
import type { VelRoute, VelRouteRecord } from "@/types/dataTypes/router";
import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";
import { isExternal } from "./validate";
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
      route.component = modules[`/src/${route.component}.vue`];
    }

    if (route.children && route.children.length) {
      route.children = convertRouter(route.children);
    } else delete route.children;
    return route;
  });
}

/**
 * @description 根据roles数组拦截路由
 * @param routes 路由
 * @param rolesControl 是否进行权限控制
 * @param baseUrl 基础路由
 * @returns {[]}
 */
export function filterRoutes(routes: VelRouteRecord[], rolesControl: boolean, baseUrl = "/"): VelRouteRecord[] {
  return routes
    .flatMap((route: VelRouteRecord) =>
      baseUrl !== "/" && route.children && route.meta.levelHidden ? [...route.children] : route,
    )
    .map((route: VelRouteRecord) => {
      route = { ...route };
      route.path = route.path !== "*" && !isExternal(route.path) ? resolve(baseUrl, route.path) : route.path;
      if (route.children && route.children.length > 0) {
        route.children = filterRoutes(route.children, rolesControl, route.path);
        if (route.children.length > 0) {
          route.childrenPathList = route.children.flatMap((_) => <string[]>_.childrenPathList);
          if (!route.redirect) route.redirect = route.children[0].redirect || route.children[0].path;
        }
      } else route.childrenPathList = [route.path];
      return route;
    });
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

/**
 * 根据path路径获取matched
 * @param routes 菜单routes
 * @param path 路径
 * @returns {*} matched
 */
export function handleMatched(routers: VelRouteRecord[], path: string): VelRouteRecord[] {
  console.log({ routers, path });
  return routers
    .filter((route: VelRouteRecord) => (route.childrenPathList || []).indexOf(path) + 1)
    .flatMap((route: VelRouteRecord) => (route.children ? [route, ...handleMatched(route.children, path)] : [route]));
}
