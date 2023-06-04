import React from 'react';
import style from './Cart.module.css';
import { AppContext } from '../../App.js';
import CartProduct from '../CartProduct';

function Cart() {
  const { openCart, cartItems, setCartItems, setOpenCart } = React.useContext(AppContext);

  const [cartTotal, setCartTotal] = React.useState(0);

  const quantityAdd = (event, id) => {
    cartItems.forEach((obj) => {
      if (obj.id === id) obj.quantity = +event.target.value;
    });

    setCartItems([...cartItems]);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  function calcTotal() {
    let total = 0;

    cartItems.forEach((item) => {
      let quantityValue = item.quantity || 1;
      total += +(item.price * quantityValue);
    });

    total = total.toFixed();
    if (total > 0) setCartTotal(total);
  }

  React.useEffect(() => {
    if (cartItems.length === 0) setCartTotal(0);
    calcTotal();
  }, [cartItems]); // eslint-disable-line react-hooks/exhaustive-deps

  const remove = (id) => {
    const newArr = cartItems.filter((n) => n.id !== id);

    setCartItems([...newArr]);
    localStorage.setItem('cart', JSON.stringify(newArr));
  };

  return (
    <div className={`${style.cart__wrapper} ${openCart ? style.overlay : ''}`}>
      <div className={style.cart}>
        <div className={style.cart__top}>
          <button onClick={() => setOpenCart(false)} className={style.close}>
            Скрыть <span>&uarr;</span>
          </button>
          <h2>Корзина</h2>
        </div>

        <ul className={style.cart__content}>
          {cartItems.length > 0 ? (
            cartItems.map((obj, index) => (
              <CartProduct
                {...obj}
                key={`${obj}_${index}`}
                remove={() => {
                  remove(obj.id);
                }}
                quantityAdd={quantityAdd}
              />
            ))
          ) : (
            <div className={style.empty}>
              <div>Вы ничего не выбрали!</div>
              <div>&#128542;</div>
            </div>
          )}
        </ul>

        <div className={style.cart__bottom}>
          <div className={style.total__cost}>
            Итоговая стоимость:<span>{cartTotal} р.</span>pуб.
          </div>
          <button onClick={() => setOpenCart(false)} className={style.cart__btn}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
