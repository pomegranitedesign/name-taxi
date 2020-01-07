import React from "react";
import styled from "styled-components";

import img from "../../../Assets/Images/logo.png";

const Logo = props => {
  return <Img src={img} alt="Logo" />;
};

const Img = styled.img`
  width: 58px;
`;

export default Logo;
