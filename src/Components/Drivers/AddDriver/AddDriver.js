import React from "react";
import { Icon as AntIcon, Button as AntButton } from "antd";
import styled from "styled-components";

const AddDriver = props => {
  return (
    <Wrapper>
      <Button type="primary">
        <Icon type="plus" />
        Добавить Водителя
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  cursor: pointer;
`;
const Icon = styled(AntIcon)`
  margin-right: 5px;
`;
const Button = styled(AntButton)``;

export default AddDriver;
