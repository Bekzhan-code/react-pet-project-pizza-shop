import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setCategory, setSortBy } from "../redux/actions/filters";

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
  { name: "популярности", type: "popularity" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];
// перемещение на отдельные массивы чтобы при новом рендере повторно не создавались лишние перменные

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzasReducer }) => pizzasReducer);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((index) => {
    dispatch(setSortBy(index));
  }, []);
  // useCallback() чтобы функция onSelectCategory создалась единожды и при новом рендоре не создавалась новая функция

  return (
    <main className="content container">
      <section className="content__top flex">
        <Categories items={categoryNames} onClickItem={onSelectCategory} />
        <SortPopup items={sortItems} onClickItem={onSelectSortType} />
      </section>

      <div className="content__wrapper">
        <h1>Все пиццы</h1>
        <section className="content__items">
          {isLoaded
            ? items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
            : Array(10)
                .fill(0)
                .map((_, index) => <PizzaLoadingBlock key={index} />)}
        </section>
      </div>
    </main>
  );
}

export default Home;
