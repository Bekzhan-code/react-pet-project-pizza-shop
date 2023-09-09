import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components";

const categoryNames = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярности", type: "rating" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
];
// перемещение на отдельные массивы чтобы при новом рендере повторно не создавались лишние перменные

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzasReducer }) => pizzasReducer);
  const { category, sortBy } = useSelector(
    ({ filtersReducer }) => filtersReducer
  );

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);
  // useCallback() чтобы функция onSelectCategory создалась единожды и при новом рендоре не создавалась новая функция

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <main className="content container">
      <section className="content__top flex">
        <Categories
          items={categoryNames}
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          items={sortItems}
          activeSortType={sortBy}
          onClickSortType={onSelectSortType}
        />
      </section>

      <h1 className="content__title">Все пиццы</h1>
      <section className="content__items">
        {isLoaded
          ? items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </section>
    </main>
  );
}

export default Home;
