export const breakpoints = {
  mobile: '460px',
  big_mobile: '768px',
  tablet: '769px',
  desktop: '1024px',
  widescreen: '1216px',
  fullhd: '1408px',
};

export default {
  mobile: `(min-width: ${breakpoints.mobile})`,
  big_mobile: `(min-width: ${breakpoints.big_mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  widescreen: `(min-width: ${breakpoints.widescreen})`,
  fullhd: `(min-width: ${breakpoints.fullhd})`,
};
