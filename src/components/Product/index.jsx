import React from 'react';
import style from './Product.module.css';
import blankHeart from './../../images/heart.png';
import likeHeart from './../../images/heart1.png';

import { TooltipProd } from './../../components';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App.js';

function Product({ id, title, image, price, onAddToFavourites, onAddToCart }) {
  const { cartItems, favouriteItems } = React.useContext(AppContext);

  const addToFavour = () => {
    onAddToFavourites({ id, title, image, price });
  };

  const addToCart = () => {
    onAddToCart({ id, title, image, price });
  };

  let addedItemIndex = cartItems.findIndex((item) => item.id === id);
  let likedItemIndex = favouriteItems.findIndex((item) => item.id === id);

  return (
    <li id={id} className={style.bs__item}>
      <div className={style.item__prod}>
        <img className={style.prodImg} src={image} alt="#" />
        <TooltipProd text="Подробнее...">
          <Link to={'/productpage/' + id} datatootip="datatooltip" className={style.item__title}>
            {title}
          </Link>
        </TooltipProd>
      </div>
      <span className={style.price}>{price} р.</span>
      <div className={style.btn__like__block}>
        <button className={style.bs__item__btn} onClick={addToCart}>
          {addedItemIndex !== -1 ? 'Nice!' : 'Add to Cart'}
        </button>
        <img
          onClick={addToFavour}
          className={style.item__like}
          src={likedItemIndex !== -1 ? likeHeart : blankHeart}
          alt="Heart"
        />
      </div>
    </li>
  );
}

export default Product;
