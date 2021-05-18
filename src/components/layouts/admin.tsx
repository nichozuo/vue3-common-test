import { defineComponent, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getMenuData } from "./getMenuData";
import { globalState as state } from "./state";

export const AdminLayout = defineComponent({
  setup() {
    const { getRoutes } = useRouter();
    const route = useRoute();

    const { menuData } = getMenuData(getRoutes());

    const updateSelectedMenu = () => {
      const matched = route.matched.concat().map((item) => item.path);
      matched.shift();
      state.selectedKeys = matched;
    };

    return () => (
      <pro-layout
        layout={state.layout}
        navTheme={state.navTheme}
        isMobile={state.isMobile}
        fixSiderbar={state.fixSiderbar}
        fixedHeader={state.fixedHeader}
        contentWidth={"Fixed"}
        primaryColor={"#1890ff"}
        contentStyle={{ minHeight: "300px" }}
        siderWidth={state.sideWidth}
        splitMenus={state.splitMenus}
        menuData={menuData}
        collapsed={state.collapsed}
        openKeys={state.openKeys}
        selectedKeys={state.selectedKeys}
        onCollapse={($event: boolean) => {
          state.collapsed = $event;
        }}
        onOpenKeys={($event: string[]) => {
          state.openKeys = $event;
        }}
        onSelect={updateSelectedMenu}
        rightContentRender={(props: { layout: any; navTheme: any }) => (
          <div
            class={["right-content", `${props.layout}-${props.navTheme}`]}
            style={{ marginRight: "16px" }}
          >
            <span>Sendya</span>
          </div>
        )}
        menuHeaderRender={() => (
          <a>
            <img src="https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg" />
            {state.collapsed && state.layout !== "mix" ? null : (
              <h1>Pro Preview</h1>
            )}
          </a>
        )}
      ></pro-layout>
    );
  },
});
