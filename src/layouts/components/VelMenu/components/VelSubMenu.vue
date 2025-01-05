<template>
  <el-sub-menu :index="itemOrMenu.path" popper-append-to-body>
    <template #title>
      <el-icon><component :is="'Edit'"></component></el-icon>
      <span :title="itemOrMenu.meta.title">
        {{ itemOrMenu.meta.title }}
      </span>
    </template>
    <slot />
  </el-sub-menu>
</template>
<script lang="ts" setup>
defineOptions({
  name: "VelSubMenu",
});
defineProps({
  itemOrMenu: {
    type: Object,
    default() {
      return null;
    },
  },
});
</script>
