<template>
  <div class="logo-container logo-container-column">
    <router-link to="/">
      <span class="logo">
        <!-- 使用自定义svg示例 -->
        <svg-icon name="vue" />
      </span>
      <span class="title">
        {{ title }}
      </span>
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
defineOptions({
  name: "VelLogo",
});
const title = ref("Vite-Admin");
</script>
<style lang="scss" scoped>
@mixin container {
  position: relative;
  height: var(--base-header-height);
  overflow: hidden;
  line-height: var(--base-header-height);
  background: transparent;
}

@mixin logo {
  display: inline-block;
  width: 32px;
  height: 32px;
  color: var(--vel-color-grey);
  vertical-align: middle;
  fill: currentColor;
}

@mixin title {
  display: inline-block;
  margin-left: 5px;
  overflow: hidden;
  font-size: 20px;
  line-height: 55px;
  color: var(--vel-color-grey);
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
.logo-container {
  &-column {
    @include container;

    height: var(--base-logo-height);
    line-height: var(--base-logo-height);
    text-align: center;

    .logo {
      svg,
      img {
        @include logo;
      }
    }

    .title {
      @include title;
      max-width: calc(var(--vel-left-menu-width) - 60px);
    }
  }

  &-column {
    background: var(--base-column-second-menu-background) !important;

    .logo {
      position: fixed;
      top: 0;
      display: block;
      width: var(--base-left-menu-width-min);
      height: var(--base-logo-height);
      margin: 0;
      background: var(--base-column-first-menu-background);
    }

    .title {
      padding-right: 15px;
      padding-left: 15px;
      margin-left: var(--base-left-menu-width-min) !important;
      color: var(--vel-color-black) !important;
      background: var(--base-column-second-menu-background) !important;
      @include title;
    }
  }
}
</style>
