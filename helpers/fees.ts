//TODO: Calculate the shipping fee
export const shippingFee = (amount: number) => {
  const fee = amount * 0.01;
  return parseInt(fee.toFixed(0));
};

//TODO: Calculate the vat fee
export const vatFee = (amount: number) => {
  const fee = amount * 0.001;
  return parseInt(fee.toFixed(0));
};

//TODO: Calculate the grand total fee
export const grandTotal = (total: number, shipping: number, vat: number) => {
  const fee = total + shipping + vat;
  return parseInt(fee.toFixed(0));
};
