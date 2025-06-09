import "./init.js";
import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import AppRouter from "./router";
import "moment/locale/zh-cn";
import zhCN from "antd/es/locale/zh_CN";
import Helmet from "react-helmet";

import "./index.less";

const container: Element | DocumentFragment = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <Router>
    <Helmet>
      <title>asdfsadfsadf</title>
      <meta name="description" content="asdfasdfsadf" />
    </Helmet>
    <ConfigProvider locale={zhCN}>
      <AppRouter />
    </ConfigProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Web 性能体验和质量指标
reportWebVitals();
