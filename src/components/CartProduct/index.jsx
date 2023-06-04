import React from 'react';
import style from './CartProduct.module.css';

import trashCan from './../../images/trash-can.png';

function CartProduct({ id, image, price, title, quantityAdd, quantity, remove }) {
  let quantityValue = quantity || 1;

  return (
    <li id={id} className={style.cartItem}>
      <img width={70} height={70} src={image} alt="#" />
      <div className={style.cartItem__info}>{title}</div>
      <div className={style.cartItem__rights}>
        <div>Цена: {price * quantityValue} р.</div>
        <input
          onChange={(event) => {
            quantityAdd(event, id);
          }}
          type="number"
          min="1"
          max="10"
          className={style.product__number}
          defaultValue={quantityValue}
        />
        <img
          onClick={(obj) => {
            remove(obj.id);
          }}
          src={trashCan}
          alt="Trashcan"
        />
      </div>
    </li>
  );
}

export default CartProduct;
