import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../Components/ProductCard";
import { CART_ITEM } from "../Data/CartData";
import { mixin } from "../Styles/mixin";

const ProductList = () => {
  useEffect(() => {
    console.log("ProductList render");
  });
  return (
    <ListWrapper>
      <Title>상품목록</Title>
      <Line />
      <CardContainer>
        {CART_ITEM.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </CardContainer>
    </ListWrapper>
  );
};

export default ProductList;

const ListWrapper = styled.div`
  width: 1096px;
  margin: 0 auto;
`;

const Title = styled.p`
  ${mixin.marginSet(67, 0, 22, 0)};
  ${mixin.fontSet("_", "28px", "900")};
`;

const Line = styled.div`
  height: 2px;
  ${mixin.marginSet(22, 0, 29, 0)};
  background-color: black;
`;

const CardContainer = styled.div`
  ${mixin.flexSet()}
  flex-wrap: wrap;
`;
