import path from "node:path";
import { defineConfig, ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import ElementPlus from "unplugin-element-plus/vite";
import UnoCSS from "unocss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv) => {
  console.log(mode, command);
  if (command === "serve") {
    console.log(123);
  } else {
    console.log(123);
  }
  //获取环境变量所在路径
  const env = loadEnv(mode, path.resolve(process.cwd(), "env"));
  console.log(env);
  return {
    plugins: [
      vue(),
      UnoCSS(),
      AutoImport({
        imports: ["vue", "vue-router", "pinia"],
        dts: "src/types/auto-import.d.ts",
        resolvers: [ElementPlusResolver()],
        eslintrc: {
          enabled: false, // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
        },
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: "src/types/components.d.ts",
      }),
      ElementPlus({
        useSource: true,
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")], //图标存放路径
        symbolId: "icon-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/define.scss" as *;@use "@/styles/element/index.scss" as *;`,
        },
      },
    },

    envDir: path.join(__dirname, "env"),
  };
});
