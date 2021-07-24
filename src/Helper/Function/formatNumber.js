// chèn "." vào phần nghìn, phần trăm ...
export const formatNumber = (number) => {
  if (number) {
    return `$${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  } else return `$0`;
};
