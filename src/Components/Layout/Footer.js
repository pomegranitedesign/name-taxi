import React from "react";
import styled from "styled-components";

const Footer = props => {
  return (
    <Wrapper>
      <span>Copyright@{new Date().getFullYear()}</span>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 50px 200px 50px 200px;
`;

export default Footer;
