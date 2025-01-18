<script lang="ts" setup>
import { useRouterStore } from "@/stores/modules/routes";
import { handleActivePath } from "@/utils/routes";
import { watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
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
onMounted(() => {
  console.log({ route });
  console.log({ router: router.getRoutes() });
});
</script>

<template>
  <div class="vel-app-main">
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
