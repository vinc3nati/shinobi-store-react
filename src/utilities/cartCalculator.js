export const cartTotal = (cart) =>
  cart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

export const deliveryFee = (total) => (total > 1000 ? 0 : 40);
