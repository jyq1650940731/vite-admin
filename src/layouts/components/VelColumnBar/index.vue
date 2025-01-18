<template>
  <el-scrollbar
    class="vel-column-bar-container vel-column-bar-container-card"
    :class="{
      'is-collapse': collapse,
    }"
  >
    <vel-logo></vel-logo>
    <el-tabs v-model="tab.data" tab-position="left" @tab-click="handleTabClick">
      <template v-for="(item, index) in routes" :key="index + item.name">
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
      :default-active="activeMenu.data"
      mode="vertical"
      :unique-opened="false"
      :route="true"
    >
      <el-divider> {{ tabMenu ? tabMenu.meta.title : "" }} </el-divider>
      <template v-for="item in partialRoutes" :key="item.path">
        <vel-menu v-if="!item.meta.hidden" :item="item" />
      </template>
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import VelLogo from "@/layouts/components/VelLogo/index.vue";
import VelMenu from "@/layouts/components/VelMenu/index.vue";
import variables from "@/styles/variables.module.scss";
import { ref } from "vue";
import { useRouterStore } from "@/stores/modules/routes";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
defineOptions({ name: "ValColumnBar" });

const routesStore = useRouterStore();
const collapse = ref(false);

// const route = useRoute();
const router = useRouter();

const {
  getTab: tab,
  getTabMenu: tabMenu,
  getActiveMenu: activeMenu,
  getRoutes: routes,
  getPartialRoutes: partialRoutes,
} = storeToRefs(routesStore);

const handleTabClick = () => {
  setTimeout(() => {
    if (tabMenu.value) router.push((tabMenu.value?.redirect || tabMenu.value) as string);
  });
};
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
  z-index: 999999;
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
