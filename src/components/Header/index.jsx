import React, { useState, useContext } from 'react';
import style from './Header.module.css';
import logo from './../../images/rhLogo.jpg';
import cart from './../../images/icon-cart.png';
import searchIco from './../../images/icon-search.png';
import closeIco from './../../images/close.png';
import favorite from './../../images/icon-favorite.png';
import logOut from './../../images/icon-logout.png';

import HappyFace from '../HappyAndUpset/HappyFace';
import UpsetFace from '../HappyAndUpset/UpsetFace';
import OpenedMenu from '../OpenedMenu';
import SideMenu from '../SideMenu';

import upset from './../../images/upset.png';
import happy from './../../images/happy.png';

import Login from './Login';

import { TooltipLogout } from './../../components';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App.js';

function Header(props) {
  const {
    setOpenedMenu,
    thumbCount,
    setThumbCount,
    favouriteItems,
    searchValue,
    setSearchValue,
    setCategory,
    setOpenCart,
    setHappyFaceActive,
    setUpsetFaceActive
  } = useContext(AppContext);

  const [loginActive, setLoginActive] = useState(true);

  function getCookie(name) {
    let matches = document.cookie.match(
      // eslint-disable-next-line
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  const logout = () => {
    if (!getCookie('authorization') || !getCookie('login')) return;
    alert('Вы уже покидаете нас?');

    document.cookie = 'authorization=; max-age=-1';
    document.cookie = 'login=; max-age=-1';

    if (!getCookie('authorization')) window.location.reload();
  };

  const likesCount = favouriteItems.length;

  const doYouLikeQuestion = () => {
    const likeProject = window.confirm('Тебе понравилось?');
    if (likeProject) {
      alert('Класс )) ');
      setHappyFaceActive(true);
      setThumbCount(thumbCount + 1);
      localStorage.setItem('likethumb', JSON.stringify(thumbCount + 1));
    } else {
      alert('Жаль. Я старался ((');
      setUpsetFaceActive(true);
      setThumbCount(thumbCount - 1);
      localStorage.setItem('likethumb', JSON.stringify(thumbCount - 1));
    }
  };

  return (
    <React.Fragment>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.header__logo}>
            <a href="/#">
              <img src={logo} alt={'Logo'} />
              <span title="Press!!" onClick={() => doYouLikeQuestion()}>
                <b>R</b>ide<b>H</b>ard
              </span>
            </a>
          </div>
          <div className={style.burgerbtn__container} onClick={() => setOpenedMenu(true)}>
            <span className={style.burgerbtn__item}></span>
            <span className={style.burgerbtn__item}></span>
            <span className={style.burgerbtn__item}></span>
          </div>
          <nav className={style.header__nav}>
            <ul>
              <li>
                <Link to="/" className={style.menu}>
                  home
                </Link>
              </li>
              <li>
                <a href="/" className={style.menu}>
                  catalog<i className={style.arrow__down}></i>
                </a>
                <ul>
                  <li>
                    <a onClick={() => setCategory('bikes&frames')} href="/#">
                      bikes & frames
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setCategory('clothes')} href="/#">
                      cycling clothing
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setCategory('parts')} href="/#">
                      bike parts & components
                    </a>
                    <ul className={style.nav2}>
                      <li>
                        <a onClick={() => setCategory('partsShimano')} href="/#">
                          shimano
                        </a>
                      </li>
                      <li>
                        <a onClick={() => setCategory('partsSram')} href="/#">
                          sram
                        </a>
                      </li>
                      <li>
                        <a onClick={() => setCategory('partsCampagnolo')} href="/#">
                          campagnolo
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a onClick={() => setCategory('wheels')} href="/#">
                      tires & wheels
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setCategory('accessories')} href="/#">
                      accessories
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setCategory('')} href="/#">
                      all...
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/shipping/" className={style.menu}>
                  payment & shipping
                </Link>
              </li>
              <li>
                <Link to="/contacts/" className={style.menu}>
                  contacts
                </Link>
              </li>
            </ul>
          </nav>
          <div className={style.header__reg}>
            <div className={style.item}>
              <div className={style.search}>
                <img src={searchIco} alt="search" />
                <input
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  type="text"
                  placeholder="Search..."
                />
                {searchValue && (
                  <img
                    onClick={() => setSearchValue('')}
                    className={style.close}
                    src={closeIco}
                    alt="close"
                  />
                )}
              </div>
            </div>
            <div className={`${style.item} ${style.favoriteImg}`}>
              <Link to="/favourites/">
                <img src={favorite} alt={'Favorite'} />
              </Link>
              <span
                className={
                  likesCount > 0 ? `${style.like__count + ' ' + style.active}` : style.like__count
                }>
                {likesCount}
              </span>
            </div>
            <a href="/#" className={`${style.item} ${style.cartImg}`}>
              <img onClick={() => setOpenCart(true)} src={cart} alt={'Cart'} />
              <span
                className={
                  props.cartVolume > 0
                    ? `${style.cart__count + ' ' + style.active}`
                    : style.cart__count
                }>
                {props.cartVolume}
              </span>
            </a>
            <div className={`${style.item} ${style.logout}`}>
              <div onClick={() => logout()}>
                <TooltipLogout text="LogOut">
                  <img src={logOut} alt={'logout'} />
                </TooltipLogout>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Login active={loginActive} setActive={setLoginActive} />

      <HappyFace>
        <img src={happy} alt="happyface" />
      </HappyFace>
      <UpsetFace>
        <img src={upset} alt="upsetface" />
      </UpsetFace>
      <OpenedMenu>
        <SideMenu />
      </OpenedMenu>
    </React.Fragment>
  );
}

export default Header;
