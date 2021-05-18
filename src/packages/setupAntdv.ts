import { App } from "vue";
import {
  Layout,
  Spin,
  Menu,
  Card,
  Button,
  Table,
  Form,
  Input,
  Select,
  Checkbox,
  Radio,
  Pagination,
  message,
  Modal,
  Popconfirm,
  Dropdown,
  DatePicker,
  ConfigProvider,
  Switch,
  Tag,
  Upload,
  TreeSelect,
  Tree,
  Divider,
  Row,
  Col,
  Progress,
  Avatar,
  BackTop,
  PageHeader,
  Steps,
  Statistic,
} from "ant-design-vue";

import ProLayout, { PageContainer } from "@ant-design-vue/pro-layout";

export const setupAntdv = (app: App<Element>) => {
  app
    .use(Layout)
    .use(Spin)
    .use(Menu)
    .use(Card)
    .use(Button)
    .use(Table)
    .use(Form)
    .use(Input)
    .use(Pagination)
    .use(Modal)
    .use(Select)
    .use(Checkbox)
    .use(Radio)
    .use(Popconfirm)
    .use(Dropdown)
    .use(DatePicker)
    .use(ConfigProvider)
    .use(Switch)
    .use(Tag)
    .use(Upload)
    .use(TreeSelect)
    .use(Tree)
    .use(Divider)
    .use(Row)
    .use(Col)
    .use(Progress)
    .use(PageHeader)
    .use(Avatar)
    .use(Steps)
    .use(Statistic)
    .use(BackTop)
    .use(ProLayout)
    .use(PageContainer);

  app.config.globalProperties.$message = message;
};
