import instance from "@/utils/request";
/**
 * @description 获取菜单栏列表
 */
export const getMenuListAPI = () =>
  instance({
    url: "/api/router/getMenu",
    method: "get",
  });
