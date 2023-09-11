export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_TO_CART",
  payload: pizzaObj,
});

export const removeAllPizzasFromCart = () => ({
  type: "REMOVE_ALL_PIZZA_FROM_CART",
});

export const minusCartPizzaAmount = (payload) => ({
  type: "MINUS_CART_PIZZA_AMOUNT",
  payload,
});

export const plusCartPizzaAmount = (payload) => ({
  type: "PLUS_CART_PIZZA_AMOUNT",
  payload,
});

export const removeCartPizza = (payload) => ({
  type: "REMOVE_CART_PIZZA",
  payload,
});
