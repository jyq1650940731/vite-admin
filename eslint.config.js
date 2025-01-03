import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    ignores: ["node_modules", "dist", "public"],
    rules: {
      "@typescript-eslint/no-explicit-any": ["off"],
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  //隐藏的全局变量定义问题
  { languageOptions: { globals: globals.browser } },
  //eslint现成规则集
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  eslintPluginPrettierRecommended,
);
