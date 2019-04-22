import { css } from "styled-components";

const breakpoints = {
  max_xs: "(max-width: 767px)",
  max_sm: "(max-width: 991px)",
  max_md: "(max-width: 1199px)",

  min_sm: "(min-width: 768px)",
  min_md: "(min-width: 992px)",
  min_lg: "(min-width: 1200px)"
};

// Iterate through the breakpoints and create a media template
const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media ${breakpoints[label]} {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
