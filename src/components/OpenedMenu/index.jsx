import React from 'react';
import style from './OpenedMenu.module.css';

import { AppContext } from '../../App';

function OpenedMenu({ children }) {
  const { openedMenu, setOpenedMenu } = React.useContext(AppContext);

  return (
    <div
      className={openedMenu ? `${style.menu} + ${style.active}` : style.menu}
      onClick={() => setOpenedMenu(false)}>
      <div
        className={openedMenu ? `${style.menu__content} + ${style.active}` : style.menu__content}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default OpenedMenu;
