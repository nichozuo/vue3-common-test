import { reactive } from "vue";
import { PureSettings } from "./defaultSettings";

export interface MenuState {
  selectedKeys: string[];
  openKeys: string[];
  setSelectedKeys?: (key: string[]) => void;
  setOpenKeys?: (key: string[]) => void;
}

export interface Route {
  path: string;
  breadcrumbName: string;
  children?: Omit<Route, "children">[];
}

export interface BreadcrumbProps {
  prefixCls?: string;
  routes?: Route[];
  params?: any;
  separator?: CustomRender;
  itemRender?: (opts: {
    route: Route;
    params: any;
    routes: Array<Route>;
    paths: Array<string>;
  }) => CustomRender;
}

export type BreadcrumbListReturn = Pick<
  BreadcrumbProps,
  Extract<keyof BreadcrumbProps, "routes" | "itemRender">
>;

export interface RouteContextProps extends Partial<PureSettings>, MenuState {
  getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
  i18n?: (t: string) => string;

  breadcrumb?: BreadcrumbListReturn;
  menuData: MenuDataItem[];
  isMobile?: boolean;
  prefixCls?: string;
  collapsed?: boolean;
  hasSideMenu?: boolean;
  hasHeader?: boolean;
  sideWidth?: number;
  hasFooterToolbar?: boolean;
  hasFooter?: boolean;
  setHasFooterToolbar?: (bool: boolean) => void;
  /* 附加属性 */
  [key: string]: any;
}

export const globalState = reactive<RouteContextProps>({
  collapsed: false,
  openKeys: ["/dashboard"],
  selectedKeys: ["/welcome"],
  layout: "mix",
  navTheme: "dark",
  isMobile: false,
  fixSiderbar: false,
  fixedHeader: false,
  menuData: [],
  sideWidth: 208,
  splitMenus: false,
  hasSideMenu: false,
  hasHeader: true,
  hasFooterToolbar: false,
  setHasFooterToolbar: (has: boolean) => (globalState.hasFooterToolbar = has),
});
