export const setSortBy = (sortValue) => ({
  type: "SET_SORT_BY",
  payload: sortValue,
});

export const setCategory = (categoryIndex) => ({
  type: "SET_CATEGORY",
  payload: categoryIndex,
});
