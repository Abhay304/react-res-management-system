export const historyState = {
  paymentHistory: JSON.parse(localStorage.getItem("historyJson")) || [],
  totalAmount: JSON.parse(localStorage.getItem("totalAmount")) || [],
};
