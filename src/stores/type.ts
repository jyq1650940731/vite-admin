import type { VelRouteRecord } from "@/types/dataTypes/router";

export interface RouterStateType {
  tab: {
    data: string | undefined;
  };
  tabMenu: string | undefined;
  activeMenu: {
    data: string | undefined;
  };
  routes: VelRouteRecord[];
}
