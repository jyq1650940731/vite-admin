<template>
  <el-scrollbar
    class="vel-column-bar-container vel-column-bar-container-card"
    :class="{
      'is-collapse': collapse,
    }"
  >
    <vel-logo></vel-logo>
    <el-tabs v-model="activeName" tab-position="left">
      <template v-for="(item, index) in tab" :key="index + item.name">
        <el-tab-pane :name="item.name">
          <template #label>
            <div class="vab-column-grid vab-column-grid-card" :title="item.meta.title">
              <div>
                <div class="ri-archive-line">
                  <el-icon><component :is="'Edit'"></component></el-icon>
                </div>
                <span>
                  {{ item.meta.title }}
                </span>
              </div>
            </div>
          </template>
        </el-tab-pane>
      </template>
    </el-tabs>
    <el-menu
      :background-color="variables['column-second-menu-background']"
      :default-active="'1'"
      mode="vertical"
      :unique-opened="false"
    >
      <el-divider> 测试demo </el-divider>
      <template v-for="item in partialRoutes" :key="item.path">
        <vel-menu v-if="!item.meta.hidden" :item="item" />
      </template>
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { MenuItemType } from "@/types/dataTypes/router.ts";
import VelLogo from "@/layouts/components/VelLogo/index.vue";
import VelMenu from "@/layouts/components/VelMenu/index.vue";
import variables from "@/styles/variables.module.scss";
defineOptions({ name: "ValColumnBar" });
const collapse = ref(false);
const activeName = ref("测试");
const partialRoutes = reactive<MenuItemType[]>([
  {
    path: "icon",
    name: "Icon",
    meta: {
      title: "图标",
      icon: "remixicon-line",
    },
    children: [
      {
        path: "remixIcon",
        name: "RemixIcon",
        component: "@views/vab/icon/remixIcon",
        meta: {
          title: "小清新图标",
        },
      },
      {
        path: "iconSelector",
        name: "IconSelector",
        component: "@views/vab/icon/iconSelector",
        meta: {
          title: "图标选择器",
        },
      },
    ],
  },
  {
    path: "permission",
    name: "Permission",
    component: "@views/vab/permission/index",
    meta: {
      title: "角色权限",
      icon: "user-3-line",
      badge: "Pro",
    },
  },
  {
    path: "table",
    name: "Table",
    meta: {
      title: "表格",
      guard: {
        role: ["Editor"],
        mode: "except",
      },
      icon: "table-2",
    },
    children: [
      {
        path: "comprehensiveTable",
        name: "ComprehensiveTable",
        component: "@views/vab/table/comprehensiveTable",
        meta: {
          title: "综合表格",
        },
      },
      {
        path: "detail",
        name: "Detail",
        component: "@views/vab/table/detail",
        meta: {
          hidden: true,
          title: "详情页",
          activeMenu: "/vab/table/comprehensiveTable",
          dynamicNewTab: true,
        },
      },
      {
        path: "inlineEditTable",
        name: "InlineEditTable",
        component: "@views/vab/table/inlineEditTable",
        meta: {
          title: "行内编辑表格",
          noKeepAlive: true,
        },
      },
      {
        path: "customTable",
        name: "CustomTable",
        component: "@views/vab/table/customTable",
        meta: {
          title: "自定义表格",
        },
      },
      {
        path: "dynamicTable",
        name: "DynamicTable",
        component: "@views/vab/table/dynamicTable",
        meta: {
          title: "动态表格",
          badge: "New",
        },
      },
    ],
  },
  {
    path: "card",
    name: "Card",
    component: "@views/vab/card/index",
    meta: {
      title: "卡片",
      guard: ["Admin"],
      icon: "inbox-line",
    },
  },
  {
    path: "list",
    name: "List",
    component: "@views/vab/list/index",
    meta: {
      title: "列表",
      guard: ["Admin"],
      icon: "list-check-2",
    },
  },
  {
    path: "description",
    name: "Description",
    component: "@views/vab/description/index",
    meta: {
      title: "描述",
      guard: ["Admin"],
      icon: "slideshow-line",
    },
  },
  {
    path: "calendar",
    name: "Calendar",
    component: "@views/vab/calendar/index",
    meta: {
      title: "日历",
      guard: ["Admin"],
      icon: "calendar-check-line",
      dot: true,
    },
  },
  {
    path: "editor",
    name: "Editor",
    meta: {
      title: "编辑器",
      guard: ["Admin"],
      icon: "edit-2-line",
    },
    children: [
      {
        path: "richTextEditor",
        name: "RichTextEditor",
        component: "@views/vab/editor/richTextEditor",
        meta: {
          title: "富文本编辑器",
          guard: ["Admin"],
        },
      },
      {
        path: "wangEditor",
        name: "WangEditor",
        component: "@views/vab/editor/wangEditor",
        meta: {
          title: "腾讯文档",
          guard: ["Admin"],
          dot: true,
        },
      },
    ],
  },
  {
    path: "form",
    name: "Form",
    meta: {
      title: "表单",
      guard: ["Admin"],
      icon: "file-list-2-line",
    },
    children: [
      {
        path: "comprehensiveForm",
        name: "ComprehensiveForm",
        component: "@views/vab/form/comprehensiveForm",
        meta: {
          title: "综合表单",
        },
      },
      {
        path: "stepForm",
        name: "StepForm",
        component: "@views/vab/form/stepForm",
        meta: {
          title: "分步表单",
        },
      },
      {
        path: "button",
        name: "Button",
        component: "@views/vab/form/button",
        meta: {
          title: "按钮",
        },
      },
      {
        path: "link",
        name: "Link",
        component: "@views/vab/form/link",
        meta: {
          title: "文字链接",
        },
      },
      {
        path: "radio",
        name: "Radio",
        component: "@views/vab/form/radio",
        meta: {
          title: "单选框",
        },
      },
      {
        path: "checkbox",
        name: "Checkbox",
        component: "@views/vab/form/checkbox",
        meta: {
          title: "多选框",
        },
      },
      {
        path: "input",
        name: "Input",
        component: "@views/vab/form/input",
        meta: {
          title: "输入框",
        },
      },
      {
        path: "inputNumber",
        name: "InputNumber",
        component: "@views/vab/form/inputNumber",
        meta: {
          title: "计数器",
        },
      },
      {
        path: "select",
        name: "Select",
        component: "@views/vab/form/select",
        meta: {
          title: "选择器",
          dot: true,
        },
      },
      {
        path: "switch",
        name: "Switch",
        component: "@views/vab/form/switch",
        meta: {
          title: "开关",
        },
      },
      {
        path: "slider",
        name: "Slider",
        component: "@views/vab/form/slider",
        meta: {
          title: "滑块",
        },
      },
      {
        path: "timePicker",
        name: "TimePicker",
        component: "@views/vab/form/timePicker",
        meta: {
          title: "时间选择器",
        },
      },
      {
        path: "datePicker",
        name: "DatePicker",
        component: "@views/vab/form/datePicker",
        meta: {
          title: "日期选择器",
        },
      },
      {
        path: "dateTimePicker",
        name: "DateTimePicker",
        component: "@views/vab/form/dateTimePicker",
        meta: {
          title: "日期时间选择器",
        },
      },
      {
        path: "rate",
        name: "Rate",
        component: "@views/vab/form/rate",
        meta: {
          title: "评分",
        },
      },
    ],
  },
]);
const tab = reactive([
  {
    path: "index",
    name: "Index",
    component: "@views/index/index",
    meta: {
      title: "首页",
      icon: "home-2-line",
      noClosable: true,
      hidden: false,
    },
  },
  {
    path: "dashboard",
    name: "Dashboard",
    component: "@views/index/dashboard",
    meta: {
      title: "看板",
      icon: "dashboard-line",
      hidden: false,
    },
  },
  {
    path: "workbench",
    name: "Workbench",
    component: "@views/index/workbench",
    meta: {
      title: "工作台",
      icon: "settings-6-line",
      dot: true,
      hidden: false,
    },
  },
]);
</script>
<style lang="scss" scoped>
@mixin active {
  &:hover {
    color: var(--vel-color-primary);
    background-color: var(--base-column-second-menu-active) !important;

    i,
    svg {
      color: var(--vel-color-primary);
    }
  }

  &.is-active {
    color: var(--vel-color-primary);
    background-color: var(--base-column-second-menu-active) !important;
  }
}
.vel-column-bar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: var(--vel-left-menu-width);
  height: 100vh;
  overflow: hidden;
  background: var(--base-column-second-menu-background);
  box-shadow: var(--base-box-shadow);
  &.is-collapse {
    :deep() {
      width: 0;
    }
  }
  :deep() {
    * {
      transition: var(--base-transition);
    }

    .el-tabs {
      box-shadow: var(--base-box-shadow);
    }
  }
  &-card {
    :deep() {
      .el-tabs + .el-menu {
        left: var(--base-left-menu-width-min);
        width: calc(var(--vel-left-menu-width) - var(--base-left-menu-width-min));
        border: 0;
      }
      .el-tabs {
        .el-tabs__item {
          padding: 5px !important;

          .vab-column-grid {
            width: calc(var(--base-left-menu-width-min) - 10px) !important;
            height: calc(var(--base-left-menu-width-min) - 10px) !important;
            border-radius: 5px;
          }

          &.is-active {
            background: transparent !important;

            .vab-column-grid {
              background: var(--vel-color-primary);
            }
          }
        }
      }

      .el-tabs + .el-menu {
        left: calc(var(--base-left-menu-width-min) + 10px);
        width: calc(var(--vel-left-menu-width) - var(--base-left-menu-width-min) - 20px);
      }

      .el-sub-menu .el-sub-menu__title,
      .el-menu-item {
        min-width: 180px;
        margin-bottom: 5px;
        border-radius: 5px;
      }
    }
  }
  .vab-column-grid {
    display: flex;
    align-items: center;
    width: var(--base-left-menu-width-min);
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;

    &-card {
      justify-content: center;
      height: var(--base-left-menu-width-min);

      > div {
        [class*="ri-"] {
          display: block;
          height: 20px;
          font-size: var(--base-font-size-bigger);
        }
      }
    }
  }

  :deep() {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    .el-tabs {
      position: fixed;

      .el-tabs__header.is-left {
        margin-right: 0 !important;

        .el-tabs__nav-wrap.is-left {
          margin-right: 0 !important;
          background: var(--base-column-first-menu-background);

          .el-tabs__nav-scroll {
            height: 100%;
            overflow-y: auto;

            &::-webkit-scrollbar {
              width: 0;
              height: 0;
            }
          }
        }
      }

      .el-tabs__nav {
        height: calc(100vh - var(--base-logo-height));
        background: var(--base-column-first-menu-background);
      }

      .el-tabs__item {
        height: auto;
        padding: 0;
        color: var(--vel-color-white);

        &.is-active {
          background: var(--vel-color-primary);
        }
      }
    }

    .el-tabs__active-bar.is-left,
    .el-tabs--left .el-tabs__nav-wrap.is-left::after {
      display: none;
    }

    .el-menu {
      border: 0;

      .el-divider {
        margin: 0 0 var(--base-margin) 0;
        background-color: #f6f6f6;

        &__text {
          color: var(--vel-color-black);
        }
      }

      .el-menu-item,
      .el-sub-menu__title {
        height: var(--base-menu-item-height);

        overflow: hidden;
        line-height: var(--base-menu-item-height);
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;

        @include active;
      }
    }
  }
}
</style>
