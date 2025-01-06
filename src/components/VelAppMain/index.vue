<script lang="ts" setup>
import { useRouterStore } from "@/stores/modules/routes";
import { handleActivePath } from "@/utils/routes";
import { watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const { tab, activeMenu } = useRouterStore();
defineOptions({ name: "VelAppMain" });
watch(
  route,
  () => {
    if (tab.data !== route.matched[0].name) tab.data = <string>route.matched[0].name;
    activeMenu.data = <string>handleActivePath(route);
  },
  { immediate: true },
);
</script>

<template>
  <div class="vel-app-main">
    <section><router-view></router-view></section>
  </div>
</template>
