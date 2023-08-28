import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../redux/actions/filters";

import { Categories, SortPopup, PizzaBlock } from "../components";

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

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  // useCallback() чтобы функция onSelectCategory создалась единожды и при новом рендоре не создавалась новая функция

  return (
    <main className="content container">
      <section className="content__top flex">
        <Categories items={categoryNames} onClickItem={onSelectCategory} />
        <SortPopup items={sortItems} />
      </section>

      <div className="content__wrapper">
        <h1>Все пиццы</h1>
        <section className="content__items">
          {items.map((pizza) => (
            <PizzaBlock key={pizza.id} {...pizza} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Home;
