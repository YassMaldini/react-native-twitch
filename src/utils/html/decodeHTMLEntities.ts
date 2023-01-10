export const decodeHTMLEntities = (rawStr?: string) => {
  if (rawStr) {
    rawStr = rawStr.replaceAll('&nbsp;', ' ');
    rawStr = rawStr.replace(/&#(\d+);/g, (match, dec) => `${String.fromCharCode(dec)}`);
    return rawStr;
  } else {
    return '';
  }
};
