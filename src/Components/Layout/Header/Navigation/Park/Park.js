import React from "react";
import styled from "styled-components";
import { Menu, Dropdown, Icon, Button } from "antd";
import { Link } from "react-router-dom";

const Park = _ => {
  return (
    <Wrapper>
      <Dropdown overlay={menu} trigger={["click"]}>
        <DropdownButton className="ant-dropdown-link" href="#">
          Автопарк <Icon type="down" />
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
        <Link to="/">Заказы</Link>
      </Menu.Item>

      <Menu.Item key="1">
        <Link to="/">Водители</Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link to="/">Поездки</Link>
      </Menu.Item>

      <Menu.Item key="3">
        <Link to="/">Поездки на проверке</Link>
      </Menu.Item>

      <Menu.Item key="4">
        <Link to="/">Группы</Link>
      </Menu.Item>
    </Menu>
  );
};

const Wrapper = styled.nav`
  margin-left: 20px;
`;
const DropdownButton = styled(Button)``;

export default Park;
