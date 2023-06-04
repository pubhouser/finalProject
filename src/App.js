import React, { useState, useEffect, createContext } from 'react';

import {
  Header,
  Footer,
  Cart,
  Home,
  Favourite,
  ProductPage,
  Contacts,
  PayAndShip
} from './components';
import { Route, Routes } from 'react-router-dom';

export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [popupActive, setPopupActive] = useState(false);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [likeItems, setLikeItems] = useState([]);
  const [happyFaceActive, setHappyFaceActive] = useState(false);
  const [upsetFaceActive, setUpsetFaceActive] = useState(false);
  const [openedMenu, setOpenedMenu] = useState(false);
  const [thumbCount, setThumbCount] = React.useState(0);

  useEffect(() => {
    const localData = localStorage.getItem('data');

    if (!localData || localData) {
      fetch('https://61f2a2682219930017f507b8.mockapi.io/items?category=' + category)
        .then((response) => {
          return response.text();
        })
        .then((result) => {
          localStorage.setItem('data', result);
          setItems(JSON.parse(result));
          setIsLoading(false);

          if (result) setData(result);
        });
    }

    let localCart = localStorage.getItem('cart');
    localCart = JSON.parse(localCart);
    if (localCart) setCartItems([...localCart]);

    let localFavour = localStorage.getItem('favourites');
    localFavour = JSON.parse(localFavour);
    if (localFavour) setFavouriteItems([...localFavour]);

    let localLikes = localStorage.getItem('likethumb');
    localLikes = JSON.parse(localLikes);
    if (localLikes) setThumbCount(localLikes);
  }, [data, category]);

  return (
    <div className="app">
      <AppContext.Provider
        value={{
          data,
          openCart,
          items,
          setItems,
          cartItems,
          favouriteItems,
          setFavouriteItems,
          setCartItems,
          searchValue,
          setSearchValue,
          isLoading,
          setCategory,
          popupActive,
          setPopupActive,
          setOpenCart,
          likeItems,
          setLikeItems,
          happyFaceActive,
          setHappyFaceActive,
          upsetFaceActive,
          setUpsetFaceActive,
          thumbCount,
          setThumbCount,
          openedMenu,
          setOpenedMenu
        }}>
        <Header cartVolume={cartItems.length} />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites/" element={<Favourite />} />
          <Route path="/contacts/" element={<Contacts />} />
          <Route path="/shipping/" element={<PayAndShip />} />
          <Route path="/productpage/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
