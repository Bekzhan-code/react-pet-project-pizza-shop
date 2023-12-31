import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import cartEmptyImg from "../assets/img/cart-empty.svg";
import { Button, CartPizzaBlock } from "../components";
import {
  removeAllPizzasFromCart,
  minusCartPizzaAmount,
  plusCartPizzaAmount,
  removeCartPizza,
} from "../redux/actions/cart";

function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice, totalAmount } = useSelector(({ cartReducer }) => ({
    items: Object.values(cartReducer.items),
    totalPrice: cartReducer.totalPrice,
    totalAmount: cartReducer.totalAmount,
  }));

  const onRemoveAllPizzaFromCart = () => {
    dispatch(removeAllPizzasFromCart());
  };

  const onMinusCartPizza = (id) => {
    dispatch(minusCartPizzaAmount(id));
  };

  const onPlusCartPizza = (id) => {
    dispatch(plusCartPizzaAmount(id));
  };

  const onRemoveCartPizza = (id) => {
    dispatch(removeCartPizza(id));
  };

  return (
    <main className="container container--cart">
      {totalAmount ? (
        <section className="cart">
          <section className="cart__top flex">
            <div className="cart__title flex">
              <svg
                width="29"
                height="29"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z"
                  stroke="#3F3F3F"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z"
                  stroke="#3F3F3F"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825"
                  stroke="#3F3F3F"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1>Корзина</h1>
            </div>
            <div
              className="cart__clear flex"
              onClick={onRemoveAllPizzaFromCart}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5H4.16667H17.5"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33337 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6666 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Очистить корзину</p>
            </div>
          </section>

          <section className="cart__items">
            {items.map((pizza) => (
              <CartPizzaBlock
                key={pizza[0].id}
                {...pizza[0]}
                pizzaAmount={pizza.length}
                pizzaPrice={pizza[0] && pizza[0].price * pizza.length}
                onClickMinusPizza={onMinusCartPizza}
                onClickPlusPizza={onPlusCartPizza}
                onClickRemoveCartPizza={onRemoveCartPizza}
              />
            ))}
          </section>

          <section className="cart__info flex">
            <p>
              Всего пицц: <b>{totalAmount} шт.</b>
            </p>
            <p>
              Сумма заказа: <span>{totalPrice} &#8381;</span>
            </p>
          </section>

          <section className="flex">
            <Link to="/">
              <Button className="flex btn--back" outline>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Вернуться назад</span>
              </Button>
            </Link>
            <Button className="btn--payment">Оплатить сейчас</Button>
          </section>
        </section>
      ) : (
        <section className="cart--empty flex">
          <h1 className="cart--empty-title">
            Корзина пустая <span>😕</span>
          </h1>
          <p className="center cart--empty-descr">
            Вероятней всего, вы не заказывали ещё пиццу. <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img
            className="cart--empty-img"
            src={cartEmptyImg}
            alt="Empty cart"
          />
          <Link to="/">
            <Button className="btn--cart-empty">Вернуться назад</Button>
          </Link>
        </section>
      )}
    </main>
  );
}

export default Cart;
