import React, { useEffect } from "react";
import styled from "styled-components";
import { mixin } from "../Styles/mixin";
import CartItem from "../Components/CartItem";
import CheckBox from "../Components/CheckBox";

const CartList = ({ cartItems, filterItem }) => {
  useEffect(() => {
    console.log("CartList render");
  });
  return (
    <ListContainer>
      <Title>장바구니</Title>
      <CartTable>
        <tbody>
          <CartHeader>
            <td>
              <CheckBox />
            </td>
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
            <td />
          </CartHeader>
          {cartItems.map((item, idx) => {
            return (
              <CartItem {...item} key={idx} idx={idx} filterItem={filterItem} />
            );
          })}
        </tbody>
      </CartTable>
      <OrderTotal>
        <CheckContainer>
          <CheckBox />
          <SelectCount>전체선태 3/3</SelectCount>
          <CancleBtn>선택 취소</CancleBtn>
        </CheckContainer>
        <TotalPrice>
          <span>결제예정금액</span>
          <span>
            {cartItems.reduce((acc, cur) => {
              return (acc += cur.price);
            }, 0)}
            원
          </span>
        </TotalPrice>
      </OrderTotal>
      <OrderBtnContainer>
        <button>주문하기</button>
      </OrderBtnContainer>
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

const OrderTotal = styled.div`
  ${mixin.flexSet("space-between")};
  margin-top: 22px;
`;

const CheckContainer = styled.div`
  ${mixin.flexSet("center")};
  padding-left: 30px;
  font-size: 15px;
`;

const SelectCount = styled.span`
  ${mixin.fontSet(0, 41, 0, 26)};
`;
const CancleBtn = styled.button`
  all: unset;
  width: 110px;
  height: 40px;
  margin-left: 40px;
  background: #000000;
  border-radius: 3px;
  text-align: center;
  ${mixin.fontSet("#ffffff", "15px", "bold")};
`;

const TotalPrice = styled.div`
  ${mixin.flexSet("space-between", "center")};
  width: 480px;
  height: 84px;
  ${mixin.paddingSet(0, 40, 0, 51)};
  background: #fffef8;
  border: 1px solid #000000;
  border-radius: 3px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  span {
    &:first-of-type {
      font-size: 15px;
    }
    &:last-of-type {
      font-weight: bold;
      font-size: 24px;
    }
  }
`;

const OrderBtnContainer = styled.div`
  margin-top: 30px;
  text-align: right;
  button {
    width: 180px;
    height: 50px;
    background: #e82c23;
    border: 1px solid #000000;
    border-radius: 3px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
    ${mixin.fontSet("#ffffff", "18px", "bold")}
  }
`;
