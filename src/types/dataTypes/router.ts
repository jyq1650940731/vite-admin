export interface metaType {
  icon?: string;
  title: string;
  badge?: string;
  hidden?: boolean;
  guard?: guardType | string[];
  activeMenu?: string;
  noKeepAlive?: boolean;
  dynamicNewTab?: boolean;
  dot?: true;
}

export interface guardType {
  role: Array<string>;
  mode: string;
}

export interface MenuItemType {
  children?: MenuItemType[];
  meta: metaType;
  name: string;
  path: string;
  component?: string;
}
