import React from 'react';
import style from './ProductPage.module.css';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

import PopupPage from '../PopupPage';

function ProductPage() {
  const { items, setPopupActive } = React.useContext(AppContext);

  const params = useParams();
  const prodId = params.id;
  const shopItem = items.find((obj) => obj.id === Number(prodId));

  if (shopItem)
    return (
      <div className={style.product__page}>
        <div key={shopItem.id} className={style.product}>
          <div className={style.product__image}>
            <img
              className={style.block__img}
              onClick={() => setPopupActive(true)}
              src={shopItem.image}
              alt="#"
            />
          </div>
          <div className={style.product__info}>
            <h3>{shopItem.title}</h3>
            <p>{shopItem.description}</p>
            <div className={style.product__bottom}>
              <div>
                Цена: <span className={style.prod__price}>{shopItem.price}</span> руб.
              </div>
              <Link to="/">
                <button className={style.product__add__btn}>Назад</button>
              </Link>
            </div>
          </div>
        </div>

        <PopupPage>
          <img src={shopItem.image} alt="" />
        </PopupPage>
      </div>
    );
}

export default ProductPage;
