export const paymentState = {
  paymentSummary: JSON.parse(localStorage.getItem("paymentJson")) || [],
};
