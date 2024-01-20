export const getFilteredTransaction = (items, filterBy) => {
  return items.filter((item) => item.type === filterBy);
};

export const getTotalAmound = (items) => {
  const totalAmount = items.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  return totalAmount;
};
