import React from "react";
import styled from "styled-components";
import { mixin } from "../Styles/mixin";

const CartList = () => {
  return (
    <ListContainer>
      <Title>장바구니</Title>
      <CartTable>
        <tbody>
          <CartHeader>
            <td>
              <span>전체 선택</span>
            </td>
            <td>
              <span>상품정보</span>
            </td>
            <td>
              <span>수량</span>
            </td>
            <td>
              <span>상품금액</span>
            </td>
          </CartHeader>
        </tbody>
      </CartTable>
    </ListContainer>
  );
};

export default CartList;

const ListContainer = styled.div`
  width: 1096px;
  margin: 0 auto;
  tr:last-of-type {
    border-bottom: 1px solid #000000;
  }
`;

const Title = styled.p`
  ${mixin.marginSet(67, 0, 22, 0)};
  ${mixin.fontSet("28px", "900")};
`;

const CartTable = styled.table`
  width: 100%;
  border: 1px solid #000000;
  border-radius: 3px;
`;

const CartHeader = styled.tr`
  height: 72px;
  border-bottom: 1px solid #000000;
  background: #fffef8;
  td {
    vertical-align: middle;
    text-align: center;
    &:first-of-type {
      padding-left: 29px;
    }
  }
`;
