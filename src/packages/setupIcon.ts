import { App } from "vue";
import { MyIcon } from "@nichozuo/vue3-common/es";

export const setupIcon = (app: App<Element>) => {
  app.component("MyIcon", MyIcon);
};
