import type { settingsType } from "../type";

export const useSettingsStore = defineStore("settings", () => {
  const state = reactive<settingsType>({
    collapse: false,
    theme: {
      layout: "column",
    },
  });

  const updateState = (obj: any) => {
    Object.getOwnPropertyNames(obj).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state[key] = obj[key];
    });
  };
  const toggleCollapse = () => {
    state.collapse = !state.collapse;
  };
  const getCollapse = computed(() => state.collapse);
  const getTheme = computed(() => state.theme);

  const openSideBar = () => {
    updateState({ collapse: true });
  };
  const foldSideBar = () => {
    updateState({ collapse: false });
  };

  return {
    ...toRefs(state),
    getCollapse,
    getTheme,
    toggleCollapse,
    openSideBar,
    foldSideBar,
  };
});
