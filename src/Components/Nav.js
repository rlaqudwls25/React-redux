import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { mixin } from "../Styles/mixin";

const Nav = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavTitle></NavTitle>
      </NavWrapper>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: black;
  color: white;
`;

const NavWrapper = styled.div`
  ${mixin.flexSet("_", "space-between", "center")};
  width: 1096px;
  margin: 0 auto;
`;

const NavTitle = styled.span`
  ${mixin.fontSet("#fffef8", "28px", "900")};
`;
