import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { mixin } from "../Styles/mixin";
import CartIcon from "./CartIcon";

const CartNotice = ({ itemCount }) => {
  const history = useHistory();

  return (
    <Icon onClick={() => history.push("/cart")}>
      <ItemCount>
        <span>{itemCount}</span>
      </ItemCount>
      <CartIcon width="32" height="32" />
    </Icon>
  );
};

export default CartNotice;

const Icon = styled.div`
  position: relative;
`;

const ItemCount = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  width: 19px;
  height: 20px;
  ${mixin.flexSet("center", "center")}
  border-radius: 2px;
  background-color: #e82c23;
  font-size: 11px;
`;
