import Mock from "mockjs";
const menu = [
  {
    path: "/",
    name: "Root",
    component: "Layout",
    meta: {
      title: "首页",
      icon: "home-2-line",
      breadcrumbHidden: true,
    },
    children: [
      {
        path: "index",
        name: "Index",
        component: "views/home/index",
        meta: {
          title: "首页",
          icon: "home-2-line",
          noClosable: true,
        },
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: "views/home/dashboard",
        meta: {
          title: "看板",
          icon: "dashboard-line",
        },
      },
      {
        path: "workbench",
        name: "Workbench",
        component: "views/home/workbench",
        meta: {
          title: "工作台",
          icon: "settings-6-line",
          dot: true,
        },
      },
    ],
  },
  {
    path: "/scenario",
    name: "scenario",
    component: "Layout",
    meta: {
      title: "场景题",
      icon: "home-2-line",
    },
    children: [
      {
        path: "/virtualList",
        name: "virtualList",
        component: "views/scenario/virtualList/index",
        meta: {
          title: "虚拟列表",
          icon: "home-2-line",
          noClosable: true,
        },
      },
    ],
  },
  {
    path: "/log",
    name: "log",
    component: "Layout",
    meta: {
      title: "日志",
      icon: "home-2-line",
    },
    children: [
      {
        path: "/errorLog",
        name: "errorLog",
        component: "views/log/errorLog/index",
        meta: {
          title: "错误日志",
          icon: "home-2-line",
          noClosable: true,
        },
      },
    ],
  },
  {
    path: "/error",
    name: "Error",
    component: "Layout",
    meta: {
      title: "错误页",
      icon: "error-warning-line",
      levelHidden: true,
    },
    children: [
      {
        path: "403",
        name: "Error403",
        component: "views/403",
        meta: {
          title: "403",
          icon: "error-warning-line",
        },
      },
      {
        path: "404",
        name: "Error404",
        component: "views/404",
        meta: {
          title: "404",
          icon: "error-warning-line",
        },
      },
    ],
  },
];
Mock.mock("/api/router/getMenu", "get", () => {
  return {
    code: 200,
    success: "请求成功",
    data: { list: menu },
  };
});
