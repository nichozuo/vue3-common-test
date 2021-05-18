import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { setupAntdv } from "./packages/setupAntdv";
import { setupIcon } from "./packages/setupIcon";
import { setupComponents } from "./packages/setupComponents";

const app = createApp(App).use(router);

setupAntdv(app);
setupIcon(app);
setupComponents(app);

app.mount("#app");
