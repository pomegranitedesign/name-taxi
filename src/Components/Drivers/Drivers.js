import React from "react";
import styled from "styled-components";
// import { Row, Col } from "antd";

import Driver from "./Driver";
import AddDriver from "./AddDriver/AddDriver";
import Settings from "./Settings/Settings";

const Drivers = props => {
  return (
    <Wrapper>
      <div>
        <Heading>
          <Title>
            Список Водителей
            <Count>2058</Count>
          </Title>

          <AddDriver />
        </Heading>

        <Settings />
      </div>

      <Driver />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Heading = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Title = styled.h1`
  font: 700 54px / 48px "Open Sans", sans-serif;
  color: #2f3239;
  padding: 0;
  margin: 0;
`;
const Count = styled.span`
  font: 300 20px / 48px Gilroy, Helvetica, Arial, sans-serif;
  color: #a3a3a3;
  margin-left: 15px;
`;

export default Drivers;
