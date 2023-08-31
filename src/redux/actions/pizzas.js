export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  fetch(
    `http://localhost:3001/pizzas?${
      category ? `category=${category}` : ""
    }&_sort=${sortBy}`
  )
    .then((res) => res.json())
    .then((data) => dispatch(setPizzas(data)));
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
