export const fontUrls = {
  displayBold: '/fonts/bryant/bryantBold.woff',
  // robotoMono: '',
};

export const computerTextConfig = (fontSize:number = 0.27) => ({
  fontSize,
  font: fontUrls.displayBold,
  letterSpacing: 0 * fontSize,
});
