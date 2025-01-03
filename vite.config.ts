import path from "node:path";
import { defineConfig, ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";

const ENV_DIR = path.join(__dirname, "env");
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
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      ElementPlus({
        useSource: true,
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

    envDir: ENV_DIR,
  };
});
