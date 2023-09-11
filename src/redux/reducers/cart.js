const initialState = {
  items: {},
  totalPrice: 0,
  totalAmount: 0,
  pizzaAmount: {},
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_TO_CART": {
      const cartItemId = `${action.payload.id}-${action.payload.type}-${action.payload.size}`;
      const pizzaAmountId = action.payload.id;

      const newItems = {
        ...state.items,
        [cartItemId]: !state.items[cartItemId]
          ? [action.payload]
          : [...state.items[cartItemId], action.payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((acc, pizza) => acc + pizza.price, 0);
      const totalAmount = allPizzas.length;

      const newPizzaAmount = {
        ...state.pizzaAmount,
        [pizzaAmountId]: !state.pizzaAmount[pizzaAmountId]
          ? 1
          : (state.pizzaAmount[pizzaAmountId] += 1),
      };
      return {
        ...state,
        items: newItems,
        totalPrice,
        totalAmount,
        pizzaAmount: newPizzaAmount,
      };
    }

    case "REMOVE_ALL_PIZZA_FROM_CART":
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalAmount: 0,
        pizzaAmount: {},
      };

    case "MINUS_CART_PIZZA_AMOUNT": {
      const newItems = { ...state.items };
      const newPizzaAmount = { ...state.pizzaAmount };
      const cartPizza = newItems[action.payload];

      const totalPrice = state.totalPrice - cartPizza[0].price;
      const totalAmount = state.totalAmount - 1;
      cartPizza.pop();
      if (cartPizza.length === 0) delete newItems[action.payload];

      newPizzaAmount[Number(action.payload[0])] -= 1;
      if (newPizzaAmount[Number(action.payload[0])] === 0)
        delete newPizzaAmount[Number(action.payload[0])];
      return {
        ...state,
        items: newItems,
        totalPrice,
        totalAmount,
        pizzaAmount: newPizzaAmount,
      };
    }

    case "PLUS_CART_PIZZA_AMOUNT": {
      const newItems = { ...state.items };
      const newPizzaAmount = { ...state.pizzaAmount };
      const cartPizza = newItems[action.payload];

      const totalPrice = state.totalPrice + cartPizza[0].price;
      const totalAmount = state.totalAmount + 1;
      cartPizza.push(cartPizza[cartPizza.length - 1]);

      newPizzaAmount[Number(action.payload[0])] += 1;
      return {
        ...state,
        items: newItems,
        totalPrice,
        totalAmount,
        pizzaAmount: newPizzaAmount,
      };
    }

    case "REMOVE_CART_PIZZA": {
      const newItems = { ...state.items };
      const newPizzaAmount = { ...state.pizzaAmount };
      const cartPizza = newItems[action.payload];

      const totalPrice =
        state.totalPrice - cartPizza[0].price * cartPizza.length;
      const totalAmount = state.totalAmount - cartPizza.length;

      delete newItems[action.payload];
      newPizzaAmount[Number(action.payload[0])] -= cartPizza.length;
      if (newPizzaAmount[Number(action.payload[0])] === 0)
        delete newPizzaAmount[Number(action.payload[0])];

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalAmount,
        pizzaAmount: newPizzaAmount,
      };
    }

    default:
      return state;
  }
};

export default cart;
