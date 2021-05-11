import { css } from "styled-components";

export const mixin = {
  flexSet: (
    justifyContent = "center",
    alignItems = "center",
    flexDirection = "row"
  ) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,

  fontSet: (color = "#000000", size = "16px", weight = "normal") =>
    css`
      color: ${color};
      font-size: ${size};
      font-weight: ${weight};
    `,

  marginSet: (
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0
  ) => css`
    margin: ${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px;
  `,

  paddingSet: (
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0
  ) => css`
    padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px
      ${paddingLeft}px;
  `,

  borderSet: (width = 1, style = "solid", color = "#000000") => {
    return css`
      border: ${width}px ${style} ${color};
    `;
  },
};
