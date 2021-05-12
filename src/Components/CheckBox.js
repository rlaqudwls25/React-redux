import React, { useState } from "react";
import styled from "styled-components";
import { mixin } from "../Styles/mixin";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Label isChecked={isChecked}>
      <CheckImg isChecked={isChecked} />
      <Input onClick={(e) => setIsChecked(e.target.checked)} />
    </Label>
  );
};

export default CheckBox;

const Label = styled.label`
  ${mixin.flexSet("center", "center")};
  width: 26px;
  height: 26px;

  background: ${({ isChecked }) => (isChecked ? "#e82c23" : "gray")};
  border-radius: 2px;
`;

const CheckImg = styled.div`
  display: ${({ isChecked }) => (isChecked ? "block" : "none")};
  width: 14px;
  height: 12px;
  background-image: url("/images/checkIcon.png");
`;

const Input = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  width: 0;
  height: 0;
  margin: 0;
`;
