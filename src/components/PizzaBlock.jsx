import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { Button } from "../components";

function PizzaBlock({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
  addedAmount,
  onClickAddPizza,
}) {
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0] === 26 ? 0 : 1);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const pizzaObj = {
      id,
      name,
      imageUrl,
      type: availableTypes[activeType],
      size: availableSizes[activeSize],
      price,
    };
    onClickAddPizza(pizzaObj);
  };

  return (
    <div className="pizza">
      <figure className="pizza__img">
        <img width="259.122" height="260" src={imageUrl} alt="Pizza" />
        <figcaption className="center">{name}</figcaption>
      </figure>
      <div className="pizza__properties">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              className={classNames(
                {
                  "pizza--type-active": index === activeType,
                },
                {
                  "pizza--type-disabled": !types.includes(index),
                }
              )}
              onClick={() => onSelectType(index)}
              key={index}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              className={classNames(
                {
                  "pizza--size-active": index === activeSize,
                },
                {
                  "pizza--size-disabled": !sizes.includes(size),
                }
              )}
              onClick={() => onSelectSize(index)}
              key={index}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza__add flex">
        <p>от {price} &#8381;</p>
        <Button className="btn-add" onClick={onAddPizza} outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          <span className="btn__add-text">Добавить</span>
          {addedAmount && (
            <span className="btn__add-amount">{addedAmount}</span>
          )}
        </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  price: PropTypes.number.isRequired,
  addedAmount: PropTypes.number.isRequired,
  onClickAddPizza: PropTypes.func.isRequired,
};

export default PizzaBlock;
