import { App } from "vue";
import {
  MySearchSubmitButton,
  MyCreateButton,
  MyEditButton,
  MyDeleteButton,
} from "@nichozuo/vue3-common/es";
// import MyPagination from "../components/MyPagination";
// import MyModal from "../components/MyModal";
// import MyLoading from "../components/MyLoading";

// import {
//   // MySearchSubmitButton,
//   MyCreateButton,
//   MyEditButton,
//   MyDeleteButton,
// } from "kunerpackage/compontents/Buttons/MyButtons";

export const setupComponents = (app: App<Element>) => {
  // app.component("MyLoading", MyLoading);
  app.component("MySearchSubmitButton", MySearchSubmitButton);
  app.component("MyCreateButton", MyCreateButton);
  app.component("MyEditButton", MyEditButton);
  app.component("MyDeleteButton", MyDeleteButton);
  // app.component("MyPagination", MyPagination);
  // app.component("MyModal", MyModal);
};
