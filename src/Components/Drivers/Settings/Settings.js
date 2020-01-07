import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import Filter from "./Filter";

const Settings = props => {
  return (
    <Row>
      <Wrapper>
        <Col md={12}>
          <Filter />
        </Col>
      </Wrapper>
    </Row>
  );
};

const Wrapper = styled.div`
  margin: 20px 0;
`;

export default Settings;
