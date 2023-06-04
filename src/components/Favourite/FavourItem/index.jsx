import React from 'react';
import style from './FavourItem.module.css';

import { Link } from 'react-router-dom';

function FavourItem({ id, image, price, title, remove }) {
  return (
    <li key={id} className={style.favourItem}>
      <button
        onClick={(obj) => {
          remove(obj.id);
        }}
        className={style.favour__removeBtn}>
        &#215;
      </button>
      <div className={style.favourItem__base}>
        <img width={170} height={170} src={image} alt="#" />
        <p>{title}</p>
        <div className={style.favour__price}>Цена: {price} р.</div>
        <Link to={'/productpage/' + id} className={style.item__details}>
          Подробнее...
        </Link>
      </div>
    </li>
  );
}

export default FavourItem;
