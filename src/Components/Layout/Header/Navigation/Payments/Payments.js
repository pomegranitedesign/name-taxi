import React from "react";
import styled from "styled-components";
import { Menu, Dropdown, Icon, Button } from "antd";
import { Link } from "react-router-dom";

const Park = _ => {
  return (
    <Wrapper>
      <Dropdown overlay={menu} trigger={["click"]}>
        <DropdownButton className="ant-dropdown-link" href="#">
          Платежи <Icon type="down" />
        </DropdownButton>
      </Dropdown>
    </Wrapper>
  );
};

// Helper component(s)
const menu = _ => {
  return (
    <Menu>
      <Menu.Item key="0">
        <Link to="/">Заявки на выплаты</Link>
      </Menu.Item>

      <Menu.Item key="1">
        <Link to="/">Автоматические платежи</Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link to="/">Ведомости</Link>
      </Menu.Item>
    </Menu>
  );
};

const Wrapper = styled.nav`
  margin-left: 20px;
`;
const DropdownButton = styled(Button)``;

export default Park;
