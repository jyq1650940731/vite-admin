<template>
  <el-menu-item :index="itemOrMenu.path" @click="handleLink">
    <el-icon><component :is="'Edit'"></component></el-icon>
    <span :title="itemOrMenu.meta.title">
      {{ itemOrMenu.meta.title }}
    </span>
    <el-tag v-if="itemOrMenu.meta.badge" effect="dark" type="danger">
      {{ itemOrMenu.meta.badge }}
    </el-tag>
    <span v-if="itemOrMenu.meta.dot" class="vab-dot vab-dot-error">
      <span />
    </span>
  </el-menu-item>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
defineOptions({
  name: "VelMenuItem",
});
const props = defineProps({
  itemOrMenu: {
    type: Object,
    default() {
      return null;
    },
  },
});
const router = useRouter();
const handleLink = () => {
  router.push(props.itemOrMenu.path);
};
</script>
<style lang="scss" scoped>
:deep(.el-tag) {
  position: absolute;
  right: 20px;
  height: 16px;
  padding-right: 4px;
  padding-left: 4px;
  // margin-top: #{math.div($base-menu-item-height - 16, 2)};
  line-height: 16px;
  border: 0;
}

.vab-dot {
  position: absolute !important;
  right: 20px;
  // margin-top: #{math.div($base-menu-item-height - 6, 2)};
}
</style>
