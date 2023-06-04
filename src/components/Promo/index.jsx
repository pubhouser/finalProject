import React, { useContext } from 'react';
import style from './Promo.module.css';

import Product from '../Product/index.jsx';
import Sort from '../Sort';
import MyLoader from '../MyLoader';
import {TooltipSort} from './../../components';
import { AppContext } from '../../App.js';

function Promo() {
  const {
    items,
    setItems,
    searchValue,
    isLoading,
    favouriteItems,
    setFavouriteItems,
    cartItems,
    setCartItems
   } = useContext(AppContext);
  const list = React.createRef();
  const prevBtn = React.createRef();
  const nextBtn = React.createRef();

  const [sortPrice, setSortPrice] = React.useState(false);
  const [sortRate, setSortRate] = React.useState(false);


  const onAddToFavourites = (item) => {
    let itemAdd = JSON.stringify(item),
        itemIndex = favouriteItems.findIndex((obj) => JSON.stringify(obj) === itemAdd);
       
    if (itemIndex === -1) {
      favouriteItems.push(item);

    } else {
      favouriteItems.splice(itemIndex, 1);
    }

    setFavouriteItems([...favouriteItems]);
    localStorage.setItem('favourites', JSON.stringify(favouriteItems));
  };

  const onAddToCart = (prod) => {
    let prodAdd = JSON.stringify(prod),
      prodIndex = cartItems.findIndex((obj) => JSON.stringify(obj) === prodAdd);

    if (prodIndex === -1) {
      cartItems.push(prod);
      alert(prod.title + ' добавится в корзину покупок!))');
    } else {
      cartItems.splice(prodIndex, 1);
      alert(prod.title + ' удалится из корзины покупок!((');
    }

    setCartItems([...cartItems]);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  function moveSlide(event) {
    const firstItem = list.current.children[0];
    const itemWidth = firstItem.offsetWidth;

    let x = list.current.style.transform || 0;
    if (isNaN(x)) {
      x = x.replace('translateX(', '');
      x = x.replace(')', '');
      x = Math.abs(parseInt(x));
    }
    if (
      nextBtn.current === event.target &&
      x < items.length * itemWidth - itemWidth * (list.current.offsetWidth / itemWidth)
    )
      x += itemWidth;
    if (prevBtn.current === event.target && x !== 0) x -= itemWidth;

    list.current.style.cssText = `transform: translateX(-${x}px);`;
  }

  function onSortPrice() {
    let itemsSorted = items;

    itemsSorted.sort((a, b) => {
      return a.price - b.price;
    });

    setSortPrice(!sortPrice);
    if (sortPrice) itemsSorted.reverse();
    setItems([...itemsSorted]);

    list.current.style.cssText = '';
  }

  function onSortRate() {
    let itemsRated = items;

    itemsRated.sort((a, b) => {
      return a.rate - b.rate;
    });

    setSortRate(!sortRate);
    if (sortRate) itemsRated.reverse();
    setItems([...itemsRated]);

    list.current.style.cssText = '';
  }

  return (
    <div className={style.container}>
      <div className={style.bestseller}>
        <div className={style.section__title}>
          <h3>Best-selling items</h3>
        </div>
        <div className={style.nav__section}>
          <TooltipSort text='Try it'>
          <Sort onSortPrice={onSortPrice} onSortRate={onSortRate} />
          </TooltipSort>
          <span className={style.search__input}>
            {searchValue ? `...поиск по запросу: "${searchValue}"` : ' '}
          </span>
        </div>
        <div className={style.slider}>
          <ul ref={list} className={style.bs__items}>
            {isLoading
              ? [...new Array(4)].map((_, index) => <MyLoader key={index} />)
              : items
                  .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((obj, index) => 
                
                    <Product
                    {...obj}
                    key={`${obj}_${index}`}
                    onAddToFavourites={onAddToFavourites}
                    onAddToCart={onAddToCart}
                  />
                )}
          </ul>
        </div>
        <div className={style.slider__btn}>
          <button ref={prevBtn} onClick={moveSlide} className={style.left}>
            &#10229;
          </button>
          <button ref={nextBtn} onClick={moveSlide} className={style.right}>
            &#10230;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Promo

