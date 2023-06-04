import React from 'react';
import './PopupPage.css';

import { AppContext } from '../../App';

function PopupPage({ children }) {
  const { popupActive, setPopupActive } = React.useContext(AppContext);

  return (
    <div className={popupActive ? 'popup active' : 'popup'} onClick={() => setPopupActive(false)}>
      <div
        className={popupActive ? 'popup__content active' : 'popup__content'}
        onClick={(e) => e.stopPropagation()}>
        <div onClick={() => setPopupActive(false)} className="close__cross">
          +
        </div>
        {children}
      </div>
    </div>
  );
}

export default PopupPage;
