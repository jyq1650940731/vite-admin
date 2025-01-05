<template>
  <component :is="menuComponent" v-if="!item.meta.hidden" :item-or-menu="item">
    <template v-if="item.children && item.children.length">
      <el-scrollbar v-if="item.children.length > 18" class="vab-menu-children-height">
        <vel-menu v-for="route in item.children" :key="route.path" :item="route" />
      </el-scrollbar>
      <template v-else>
        <vel-menu v-for="route in item.children" :key="route.path" :item="route" />
      </template>
    </template>
  </component>
</template>

<script lang="ts" setup>
import type { MenuItemType } from "@/types/dataTypes/router.ts";
import { computed } from "vue";
import VelMenuItem from "./components/VelMenuItem.vue";
import VelSubMenu from "./components/VelSubMenu.vue";
defineOptions({ name: "VelMenu" });
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  layout: {
    type: String,
    default: "",
  },
});
const menuComponent = computed(() =>
  props.item.children &&
  props.item.children.some((_route: MenuItemType) => {
    return _route.meta.hidden !== true;
  })
    ? VelSubMenu
    : VelMenuItem,
);
</script>

<style lang="scss" scoped>
.vab-menu-children-height {
  height: 60vh !important;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>

<!--由于element-plus
  bug使用popper-append-to-body=false会导致多级路由无法显示，故所有菜单必须生成至body下，样式必须放到body下-->
<style lang="scss">
.el-popper.is-light {
  border: 0 !important;
}
</style>
