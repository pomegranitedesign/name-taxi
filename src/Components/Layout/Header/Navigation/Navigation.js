import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import Park from "./Park/Park";
import Payments from "./Payments/Payments";

const Navigation = props => {
  return (
    <Wrapper>
      <Row type="flex">
        <Col>
          <Park />
        </Col>

        <Col>
          <Payments />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.nav``;

export default Navigation;
