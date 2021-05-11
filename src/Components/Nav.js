import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { mixin } from "../Styles/mixin";
import CartNotice from "./CartNotice";

const Nav = ({ itemCount }) => {
  const history = useHistory();
  return (
    <NavContainer>
      <NavWrapper>
        <NavTitle onClick={() => history.push("/")}>Market</NavTitle>
        <CartNotice itemCount={itemCount} width="32" height="32" />
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
  ${mixin.flexSet("space-between", "center")};
  width: 1096px;
  margin: 0 auto;
`;

const NavTitle = styled.span`
  ${mixin.fontSet("#fffef8", "28px", "900")};
  cursor: pointer;
`;
