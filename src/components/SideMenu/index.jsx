import React from 'react';
import style from './SideMenu.module.css';

import { AppContext } from '../../App';
import { Link } from 'react-router-dom';

function SideMenu() {
  const { setOpenedMenu, setCategory } = React.useContext(AppContext);

  return (
    <div className={style.block}>
      <div className={style.content}>
        <div className={style.close} onClick={() => setOpenedMenu(false)}>
          &times;
        </div>
        <nav className={style.side__nav}>
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
      </div>
    </div>
  );
}

export default SideMenu;
