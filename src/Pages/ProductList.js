import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../Components/ProductCard";
import { mixin } from "../Styles/mixin";

const ProductList = ({ addToCart }) => {
  useEffect(() => {
    console.log("ProductList render");
  });
  return (
    <ListWrapper>
      <Title>상품목록</Title>
      <Line />
      <CardContainer>
        {CART_ITEM.map((item, idx) => {
          return (
            <ProductCard
              key={idx}
              item={item}
              addToCart={() => addToCart(item)}
            />
          );
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

const CART_ITEM = [
  {
    isChecked: true,
    product_name: "플루크 new 피그먼트 오버핏 반팔 티셔츠 FST701",
    product_id: 1304,
    product_img: "/images/tShirt.jpeg",
    price: 33250,
  },
  {
    isChecked: true,
    product_name: "르아브 미니멀리즘 네이비 블루 셔츠",
    product_id: 4204,
    product_img: "/images/blueShirts.png",
    price: 43250,
  },
  {
    isChecked: true,
    product_name: "랩12 20SS 오픈 카라/투 버튼 피케 티셔츠",
    product_id: 4204,
    product_img: "/images/piShirts.png",
    price: 103250,
  },
  {
    isChecked: true,
    product_name: "랩12 20SS 오픈 카라/투 버튼 피케 티셔츠",
    product_id: 4204,
    product_img: "/images/pants.png",
    price: 53250,
  },
  {
    isChecked: true,
    product_name: "플루크 new 피그먼트 오버핏 반팔 티셔츠 FST701",
    product_id: 1304,
    product_img: "/images/tShirt.jpeg",
    price: 33250,
  },
  {
    isChecked: true,
    product_name: "르아브 미니멀리즘 네이비 블루 셔츠",
    product_id: 4204,
    product_img: "/images/blueShirts.png",
    price: 43250,
  },
  {
    isChecked: true,
    product_name: "랩12 20SS 오픈 카라/투 버튼 피케 티셔츠",
    product_id: 4204,
    product_img: "/images/piShirts.png",
    price: 103250,
  },
  {
    isChecked: true,
    product_name: "랩12 20SS 오픈 카라/투 버튼 피케 티셔츠",
    product_id: 4204,
    product_img: "/images/pants.png",
    price: 53250,
  },
];
