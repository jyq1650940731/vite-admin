<template>
  <div class="vite-admin-wrapper"><vel-layout-column :collapse="collapse"></vel-layout-column></div>
</template>
<script lang="ts" setup>
defineOptions({ name: "ValLayout" });
import VelLayoutColumn from "./VelLayoutColumn/index.vue";
import { useSettingsStore } from "@/stores/modules/settings";
const settingsStore = useSettingsStore();
const { collapse } = storeToRefs(settingsStore);
</script>
<style lang="scss" scoped>
.vite-admin-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  [class*="vel-layout-"] {
    &.fixed {
      padding-top: calc(var(--base-nav-height) + var(--base-tabs-height));
    }
  }
  :deep() {
    .fixed-header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: calc(var(--base-z-index) - 1);
      width: 100%;
    }

    .vel-main {
      position: relative;
      width: auto;
      min-height: 100%;
      margin-left: var(--el-left-menu-width);

      &.is-collapse-main {
        margin-left: var(--base-left-menu-width-min);

        .fixed-header {
          width: var(--base-right-content-width-min);
        }
      }

      &:not(.is-collapse-main) {
        .fixed-header {
          width: calc(100% - var(--el-left-menu-width));
        }
      }
    }
  }
}
</style>
