import React from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";

const Filter = props => {
  return (
    <Wrapper>
      <span>Фильтр:</span>

      <Buttons>
        <Button>Все группы</Button>
        <Button>Все агрегаторы</Button>
        <Button>Все пригласившие</Button>
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Buttons = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;
  display: inline-block;
`;
const Button = styled(AntButton)``;

export default Filter;
