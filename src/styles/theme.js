import breakpoints from "./breakpoints";

export default {
  name: "default",
  colors: {
    brand: "#66C285",
    brandSecondary: "#FFB943",
    info: "#0284fe",
    success: "#36ab80",
    danger: "#f4541d",
    grey: "#e1e4e8",
    greyBackground: "#f1f2f4",
    white: "#FFFFFF",
    whiteBackground: "#f9fcfd"
  },
  typography: {
    dark: "#0a1f44",
    medium: "#4e5d78",
    light: "#8a94a6",
    disabled: "#b0b7c3"
  },
  fontSizes: {
    h100: "10px",
    h200: "10px",
    h300: "12px",
    h400: "14px",
    h500: "16px",
    h600: "20px",
    h700: "24px",
    h800: "28px",
    h900: "40px"
  },
  shadows: {
    // use like box-shadow: ${({theme}) => theme.shadows.z1};
    z1:
      "0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 1px 1px 0px rgba(10, 22, 70, 0.1)",
    z2:
      "0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 3px 3px -1px rgba(10, 22, 70, 0.1)",
    z3:
      "0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 6px 6px -1px rgba(10, 22, 70, 0.1)",
    z4:
      "0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 16px 16px -1px rgba(10, 22, 70, 0.1)",
    z5:
      "0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 32px 40px -2px rgba(10, 22, 70, 0.12)"
  },
  gradients: {
    blue:
      "linear-gradient(-180deg, rgb(18, 133, 255) 0%, rgb(17, 113, 208) 100%)",
    red:
      "linear-gradient(-180deg, rgb(255, 107, 142) 0%, rgb(241, 64, 67) 100%)",
    green:
      "linear-gradient(-180deg, rgb(104, 216, 142) 0%, rgb(0, 213, 190) 100%)",
    bluePurple:
      "linear-gradient(-180deg, rgb(145, 107, 255) 0%, rgb(51, 102, 255) 100%)",
    purple:
      "linear-gradient(-180deg, rgb(212, 56, 255) 0%, rgb(140, 88, 255) 100%)",
    black: "linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    white:
      "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)"
  },
  fonts: {
    primary: "Inter, sans-serif"
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  breakpoints: {
    // use like  ${({theme})=>theme.breakpoints.maxmobile}{...}
    maxmobile: "@media all and (max-width: 767px)",
    maxlaptop: "@media all and (max-width: 991px)",
    maxdesktop: "@media all and (max-width: 1199px)",
    minmobile: "@media all and (min-width: 767px)",
    minlaptop: "@media all and (min-width: 991px)",
    mindesktop: "@media all and (min-width: 1199px)"
  },
  page: {
    sideMargin: "100px",
    sideMarginMobile: "20px"
  }
};
