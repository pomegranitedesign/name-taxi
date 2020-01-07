import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import Navigation from "./Navigation/Navigation";
import Logo from "./Logo";

const Header = _ => {
  return (
    <Wrapper>
      <Row type="flex" align="middle" justify="space-between">
        <Col span={6}>
          <Logo />
        </Col>

        <Col span={6}>
          <Navigation />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: #3784cd linear-gradient(to right, #327ac9, #3c8ed1);
  box-shadow: 0 5px 62px rgba(54, 131, 205, 0.31);
  padding: 20px 100px;
`;

export default Header;
