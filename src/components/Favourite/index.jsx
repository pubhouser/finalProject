import React, { useContext } from 'react';
import style from './Favourite.module.css';

import { AppContext } from '../../App.js';
import { Link } from 'react-router-dom';

import FavourItem from './FavourItem';

function Favourite() {
  const { favouriteItems, setFavouriteItems, likeItems } = useContext(AppContext);

  const remove = (id) => {
    likeItems.splice(likeItems[id], 1);
    const newFavourArr = favouriteItems.filter((n) => n.id !== id);

    setFavouriteItems([...newFavourArr]);
    localStorage.setItem('favourites', JSON.stringify(newFavourArr));
  };

  return (
    <div className={style.favour__container}>
      <div className={style.favour}>
        <Link to="/">
          <span className={style.favour__close}>Close</span>
        </Link>
        <h2>Избранное</h2>
        <ul className={style.favour__content}>
          {favouriteItems.length > 0 ? (
            favouriteItems.map((obj, index) => (
              <FavourItem {...obj} key={`${obj}_${index}`} remove={() => remove(obj.id)} />
            ))
          ) : (
            <div className={style.empty}>
              <p>В избранном ничего нет :(</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Favourite;
