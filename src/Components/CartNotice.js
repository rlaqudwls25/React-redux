import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { mixin } from "../Styles/mixin";
import CartIcon from "./CartIcon";

const CartNotice = () => {
  const history = useHistory();
  const items = useSelector((store) => store.cartReducer);
  return (
    <Icon onClick={() => history.push("/cart")}>
      <ItemCount>
        <span>{items.length}</span>
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
