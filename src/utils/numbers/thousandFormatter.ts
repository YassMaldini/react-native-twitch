export const thousandFormatter = (receivedNumber: number) => {
  const number = receivedNumber.toString();
  const THOUSAND_FORMATTER = new RegExp(/\B(?=(\d{3})+(?!\d))/g);
  if (!number) {
    return;
  }
  const numberSplitter = '.';
  if (number.includes(numberSplitter)) {
    const numberToFormat = number.split(numberSplitter);
    return [numberToFormat[0].replace(THOUSAND_FORMATTER, ' '), numberToFormat[1]]
      .join(numberSplitter)
      .trim();
  }
  return number.replace(THOUSAND_FORMATTER, ' ');
};

export function thousandFormatter2(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}