<template>
  <el-breadcrumb class="vel-breadcrumb" separator=">">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" :to="handleTo(item.redirect)">
      <el-icon><component :is="'Edit'"></component></el-icon>
      <span v-if="item.meta.title">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
defineOptions({
  name: "VelLogo",
});
import { useRouterStore } from "@/stores/modules/routes";
import { handleMatched } from "@/utils/routes";
const route = useRoute();
const routesStore = useRouterStore();
const { getRoutes: routes } = storeToRefs(routesStore);
console.log("123", handleMatched(routes.value, route.path));

const breadcrumbList = computed(() =>
  handleMatched(routes.value, route.path).filter((item: any) => !item.meta.breadcrumbHidden),
);
const handleTo = (path: string | undefined = "") => {
  return { path };
};
</script>
<style lang="scss" scoped>
.vel-breadcrumb {
  height: var(--base-nav-height);
  font-size: var(--base-font-size-default);
  line-height: var(--base-nav-height);

  :deep() {
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: normal;
        color: #515a6e;
        i,
        svg {
          vertical-align: -4px;
          font-size: var(--base-font-size-bigger);
          margin-right: 3px;
        }
      }

      &:last-child {
        .el-breadcrumb__inner {
          a {
            color: #999;
          }
        }
      }
    }
  }
}
</style>
