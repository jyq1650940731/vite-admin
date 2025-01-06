import { getMenuListAPI } from "@/api/router";
import { authentication } from "@/config";
import { convertRouter, filterRoutes } from "@/utils/routes";

import type { RouterStateType } from "../type";
import { asyncRoutes, constantRoutes, resetRouter } from "@/router";

export const useRouterStore = defineStore("router", () => {
  const state = reactive<RouterStateType>({
    /**
     * 一级菜单值
     */
    tab: {
      data: undefined,
    },
    /**
     * 一级菜单
     */
    tabMenu: undefined,
    /**
     * 自定义激活菜单
     */
    activeMenu: {
      data: undefined,
    },
    /**
     * 一级菜单
     */
    routes: [],
  });
  const getTab = computed(() => state.tab);
  const getTabMenu = computed(() =>
    state.tab.data
      ? state.routes.find((route) => route.name === state.tab.data)
      : { meta: { title: "" }, redirect: "404" },
  );
  const getRoutes = computed(() => state.routes.filter((route) => route.meta.hidden !== true));
  const getActiveMenu = computed(() => state.activeMenu);
  const getPartialRoutes = computed(() => state.routes.find((route) => route.name === state.tab.data)?.children || []);

  const setRoutes = async () => {
    let routes = [...asyncRoutes];
    if (authentication === "all") {
      const {
        data: { list },
      } = await getMenuListAPI();
      routes = convertRouter(list);
    }
    //过滤路由
    const accessRoutes = filterRoutes([...constantRoutes, ...routes]);
    // 设置菜单所需路由
    state.routes = JSON.parse(JSON.stringify(accessRoutes));
    console.log(state.routes);
    // 根据可访问路由重置Vue Router
    await resetRouter(accessRoutes);
  };
  /**
   * @description 修改 activeName
   * @param activeMenu 当前激活菜单
   */
  const changeActiveMenu = (activeMenu: string) => {
    state.activeMenu.data = activeMenu;
  };
  return {
    ...toRefs(state),
    getTab,
    getTabMenu,
    getRoutes,
    getActiveMenu,
    getPartialRoutes,
    setRoutes,
    changeActiveMenu,
  };
});
