import React, { Fragment } from "react";
import { Layout as AntLayout, Breadcrumb } from "antd";

import Header from "./Header/Header";
import Footer from "./Footer";

const { Content } = AntLayout;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <AntLayout>
        <Header />
        <Content
          style={{
            padding: "20px 200px 0 200px",
            height: "calc(100vh - 55px)"
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Jump Taxi</Breadcrumb.Item>
            <Breadcrumb.Item>Водители</Breadcrumb.Item>
          </Breadcrumb>
          {children}
        </Content>
        <Footer />
      </AntLayout>
    </Fragment>
  );
};

export default Layout;
