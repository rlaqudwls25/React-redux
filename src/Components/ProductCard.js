import React from "react";
import styled from "styled-components";
import { mixin } from "../Styles/mixin";
import CartIcon from "./CartIcon";

const ProductCard = ({ item, addToCart }) => {
  console.log(addToCart);
  return (
    <Card>
      <Img src={item.product_img} />
      <Title>{item.product_name}</Title>
      <Price>{item.price}원</Price>
      <AddCartBtn onClick={() => addToCart()}>
        <CartIcon width="16" height="16" />
        <span>장바구니 담기</span>
      </AddCartBtn>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  width: 250px;
  height: 390px;
  ${mixin.marginSet(0, 32, 50, 0)};

  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const Img = styled.div`
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
  border-radius: 3px;

  background: url(${({ src }) => src});
`;

const Title = styled.p`
  margin-bottom: 12px;
  ${mixin.fontSet("_", "15px", "900")};
  line-height: 130%;
`;
const Price = styled.span`
  ${mixin.fontSet("#e82c23", "15px", "bold")};
`;

const AddCartBtn = styled.button`
  all: unset;
  ${mixin.flexSet("_", "center", "center")};
  width: 122px;
  height: 30px;
  margin-top: 24px;
  padding-left: 12px;
  background: #000000;
  cursor: pointer;
  span {
    padding-left: 14px;
    ${mixin.fontSet("#ffffff", "13px", "bold")};
  }
`;
