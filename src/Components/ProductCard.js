import React from "react";
import styled from "styled-components";
import { mixin } from "../Styles/mixin";

const ProductCard = ({ item }) => {
  return (
    <Card>
      <Img src={item.product_img} />
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
